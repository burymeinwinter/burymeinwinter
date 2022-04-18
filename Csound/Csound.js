
#https://cljdoc.org/d/csound-wasm/csound-wasm/6.11.0-1/doc/readme
#https://github.com/hlolli/csound-wasm/releases




const csound = require('csound-wasm');

const beeper = `
instr 1
  asig = poscil:a(0.3, 440)
  outc asig, asig
endin`

const makeBeep = `i 1 0 1`

csound.startRealtime()
csound.compileOrc(beeper);
csound.readScore(makeBeep);

setTimeout(() => process.exit(), 5000);


//////


var get_csound = async function(csound_message_callback_) {
    if (csound_is_loaded === false) {
        await load_csound(csound_message_callback_);
    }
    if (csound_injected != null) {
        csound = csound_injected;
        return csound_injected;
    } else if (csound_node != null) {
        csound = csound_node;
        csound.SetMessageCallback(csound_message_callback_);
        return csound_node;
    } else if (csound_audio_node != null) {
        csound = csound_audio_node;
        csound.SetMessageCallback(csound_message_callback_);
        return csound_audio_node;
     } else {
        csound_message_callback_("Csound is still loading, wait a bit...\n");
    }
}
