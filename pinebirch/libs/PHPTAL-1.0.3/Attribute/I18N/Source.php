<?php

// i18n:source
//
// The i18n:source attribute specifies the language of the text to be 
// translated. The default is "nothing", which means we don't provide 
// this information to the translation services.
//
class PHPTAL_Attribute_I18N_Source extends PHPTAL_Attribute
{
    function start()
    {
        $this->tag->generator->doIf('!isset($__i18n_sources)');
        $this->tag->generator->pushCode('$__i18n_sources = array()');
        $this->tag->generator->end();

        $code = '$__i18n_sources[] = $tpl->getTranslator()->setSource(\'%s\')';
        $code = sprintf($code, $this->expression);
        $this->tag->generator->pushCode($code);
    }

    function end()
    {
        $code = '$tpl->getTranslator()->setSource(array_pop($__i18n_sources))';
        $this->tag->generator->pushCode($code);
    }
}

?>
