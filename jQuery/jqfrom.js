$(function(){
    setTimeout(function(){
    /***************************
     Radio
     ***************************/
    var radio = $("input[type='radio']");
    radio.each(function(){
        var olabel = radio.parents('label');
        var $input = $(this);
        var inputSelf = this;
        var aLink = $('<a href="#" class="formRadio" rel="'+ this.name +'"></a>');
        if($input.hasClass('jqformHidden')) {return;}
        $input.addClass('jqformHidden').wrap('<span class="RadioWrapper"></span>').parent().prepend(aLink);
        $input.change(function(){
            inputSelf.checked && aLink.addClass('formRadioCheck') || aLink.removeClass('formRadioCheck');
            return true;
        });
        // Click Handler
        aLink.click(function(){
            if($input.attr('disabled')){return false;}
            $input.trigger('click').trigger('change');
            // uncheck all others of same name input radio elements
            $('input[name="'+$input.attr('name')+'"]',inputSelf.form).not($input).each(function(){
                $(this).attr('type')=='radio' && $(this).trigger('change');
            });
            return false;
        });
        // set the default state
        inputSelf.checked && aLink.addClass('formRadioCheck');
        olabel.click(function(){
            olabel.find('a').removeClass('formRadioCheck');
            $(this).find('a').addClass('formRadioCheck');
        });
    });
    /***************************
     Checkbox
     ***************************/
    var checkbox = $("input[type='checkbox']");
    checkbox.each(function(){
        var olabel = checkbox.parents('label');
        var $input = $(this);
        var inputSelf = this;
        var aLink = $('<a href="#" class="formCheckbox" rel="'+ this.name +'"></a>');
        if($input.hasClass('jqformHidden')) {return;}
        $input.addClass('jqformHidden').wrap('<span class="checkboxWrapper"></span>').parent().prepend(aLink);
        $input.change(function(){
            inputSelf.checked && aLink.addClass('formCheckboxCheck') || aLink.removeClass('formCheckboxCheck');
            return true;
        });
        // Click Handler
        aLink.click(function(){
            if($input.attr('disabled')){return false;}
            $input.trigger('click').trigger('change');
            // uncheck all others of same name input radio elements
            $('input[name="'+$input.attr('name')+'"]',inputSelf.form).not($input).each(function(){
                $(this).attr('type')=='radio' && $(this).trigger('change');
            });
            return false;
        });
        // set the default state
        inputSelf.checked && aLink.addClass('formCheckboxCheck');
    });




    },300)
})