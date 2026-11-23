/**
 * Web Audio API synthesizer for Oriental classical ambience (Maqom/Tanbur/Nay drone)
 * Creates a soothing, authentic meditative mood for classical poetry contemplation.
 */

class OrientalAmbienceSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private intervalId: any = null;

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public play() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
    this.masterGain.connect(this.ctx.destination);

    // D-based Maqom drone (D2: 73.42Hz, A2: 110Hz, D3: 146.83Hz, F#3/G3)
    const baseFreqs = [73.42, 110.0, 146.83, 220.0];

    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.25 / (idx + 1), this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push(osc);
    });

    // Occasional gentle pluck simulation (Tanbur string resonant chime)
    const maqomScale = [146.83, 164.81, 185.0, 220.0, 246.94, 293.66, 329.63, 370.0];
    let step = 0;

    this.intervalId = setInterval(() => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const freq = maqomScale[step % maqomScale.length];
      step = (step + Math.floor(Math.random() * 3) + 1) % maqomScale.length;

      const pluckOsc = this.ctx.createOscillator();
      const pluckGain = this.ctx.createGain();

      pluckOsc.type = 'triangle';
      pluckOsc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      pluckGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      pluckGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.8);

      pluckOsc.connect(pluckGain);
      pluckGain.connect(this.masterGain);

      pluckOsc.start();
      pluckOsc.stop(this.ctx.currentTime + 3);
    }, 3200);
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1600);
    } else {
      this.isPlaying = false;
    }
  }
}

export const orientalAudio = new OrientalAmbienceSynthesizer();
