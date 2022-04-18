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
