if (typeof na!=='object') { debugger; var NicerApp_WebOS = nicerapp = na = {}; }

/*
 * A newer, and thus more bug-prone (due to the ongoing and intensified browser wars) version of Javascript to load up
 * Javascript code objects on demand, fails here.
 * Implications of this for my project have yet to be guessed at, in quieter times.
 * This comment was entered 2025-06-21 02:01am to 03:43am CEST AMS Amsterdam.NL timezone.
 *
import { naMisc, arrayRemove } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/na.miscellaneous.js';
import { naThemeEditor } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/na.themeEditor-2.y.z.js';
import { naLogo } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/na.canvasLogo-4.y.z.js';

import { vividUserInterface_2D_background } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/2D/background.js';
import { vividUserInterface_2D_desktop } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/2D/desktop.js';
//import { vividUserInterface_3D_button_startMenu_planet } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/3D/button_startMenu-planet.js';
import { vividUserInterface_2D_dialog } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/2D/dialog.js';
import { vividUserInterface_2D_button } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/2D/button-5.y.z.js';
import { vividUserInterface_2D_button_v4 } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/2D/button-4.1.0.js';
import { vividUserInterface_2D_menu } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/2D/menu.js';
import { naVividMenu__behavior_rainbowPanels as naVividMenu } from '/NicerAppWebOS/ajax_getModule.php?f=/NicerAppWebOS/logic.vividUserInterface/v6.y.z/2D/vividMenu-5.y.z--behavior-rainbowPanels-1.1.0.js';
*/

na.site = {
    about : {
        firstCreated : '10 January 2002',
        copyright : '<table style="height:100%;"><tr><td>Copyright (C) 2002-2025 by <a href="mailto:rene.veerman.netherlands@gmail.com" class ="contentSectionTitle3_a"><span class="contentSectionTitle3_span">Rene A.J.M. Veerman</span></a></td><td style="width:40px;"><div class="vividButton" theme="dark" style="position:relative;color:white;height:20px;width:40px;" onclick="na.dismissCopyrightMessage();">Ok</div></td></table>',
        easterEggs : [
            { msg_html : '<p>2023-12(Dec)-13(Tue) 11:34CET (Amsterdam.NL\'s timezone) : At a certain point in a soul\'s career,<br/>that soul (learns to) trancend(s) judgement of IQ and EQ of others.<br/>this is usually only once enough kung-fu has been practiced though.<br/><a class="directLink" href="https://youtube.com/@cheetahKungFu" target="ckf">https://youtube.com/@cheetahKungFu</a></p>' },
            { msg_html : '<p>2025-07(July)-06(Sun) 09:55CET (Amsterdam.NL\'s timezone) : It\'s only when a man has decided never to let himself get used as romantic toy or tool by women, that he can actually start any sort of relationship with one himself. such is the legacy of the much-hated monogamy movement, surplanted now by <a href="https://tinyurl.com/multi-amarous-church" class="directLink" target+"mac">The Multi-Amarous Church</a>.</p>' },
            { msg_html : '<p>2025-07(July)-06(Sun) 10:07CET (Amsterdam.NL\'s timezone) : It\'s only when someone has decided never (again) to let the Gods, Angels, Spirits and/or Demons deceive and play with him/her, that he/she becomes actually free from the spiritual world.</p>' },
            { msg_html : '<p>2025-07(July)-06(Sun) 10:08CET (Amsterdam.NL\'s timezone) : It\'s only when someone has decided never (again) to let the bureaucrats, cops, ambulance staff and politicians deceive and play with him/her, that he/she becomes actually free from the mass media news worlds.</p>' }
        ]
    },

    globals : {
        // TODO : keep these up to date with each version number and/or label increase.
        // NOTE : all of these na.site.globals app get overridden by values stuck in databases of some sort (lol),
        //          and are listed by the index.php file as 'var naGlobals', before merging it's (sub-)values.
        domain : 'nicer.app',
        domainPath : '/var/www/nicer.app-5.9.0/',
        domainWWWroot : 'nicer.app-5.9.0',
        domainFolder : 'nicer.app',

        // these are all pixel values, without the CSS 'NNNNpx' notation.
        margin : 8,
        smallDeviceWidth : 1081,
        reallySmallDeviceWidth : 700
    },
    settings : {
        current : {},
        dialogs : {},
        heldUp : {}, menus : {}, buttons : {}, eventHandlers : [],
        loadContent : {
            recent : [],
            current : {},
            events : [],
            eventIdx : 0
        }
    },
    apps : {},

    dismissCookieWarning : function () {
        $.cookie('agreedToPolicies', 'true', na.m.cookieOptions());
        na.site.settings.defaultStatusMsg = na.site.about.copyright;
        na.site.setStatusMsg (na.site.about.copyright);

    },

    dismissCopyrightMessage : function () {
        $.cookie('visible_siteStatusbar', 'false', na.m.cookieOptions());
        na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs,'#siteStatusbar');
        na.desktop.resize();
    },

    error : function (errorHTML) {
        // detailed (internal) status information in HTML should also be passed to *this* function.
        na.site.setStatusMsg (errorHTML);
        //na.site.displayErrorWindow(errorHTML); -> uses a different input data format these days.
    },

    fail : function (msg, xhr, ajaxOptions, errorFunction) {
        //for na.site.setStatusMsg()
        //var html = '<table class="tableFail" style="width:100%;height:100%;"><tr><td style="font-size:1.5em">'
                //+'<span class="statusFail_nonGlow">'+msg+'</span>'
                //+ '</td><td style="width:105px;"><div class="vividButton" theme="dark" style="position:relative;color:white;width:100px;" onclick="na.site.setStatusMsg(na.site.settings.defaultStatusMsg);">Ok</div></td></table>';
        na.site.error(msg);
        na.m.log (3, 'na.site.fail() : msg='+msg);
        //na.analytics.logMetaEvent ('na.site.fail() : msg='+msg);

        if (typeof errorFunction=='function') errorFunction();
    },
    ajaxFail : function (location, url, xhr, ajaxOptions, thrownError) {
        var
        msg = 'AJAX error ('+location+') : '+thrownError+':<br/>url = '+url;

        if (location=='na.site.testDBconnection()' && thrownError=='Internal Server Error') {
            msg = 'Database cookie expired. Please log in again.';
            na.site.displayLogin();
        }

        var
        html = '<table class="tableFail" style="width:99%;"><tr><td style="font-size:1em">'
                +'<span class="statusFail">'+msg+'</span>'
                + '</td><td style="width:105px;"><div class="vividButton" theme="dark" style="position:relative;color:white;width:100px;" onclick="na.site.setStatusMsg(na.site.settings.defaultStatusMsg);">Ok</div></td></table>';
        //var msg2 = '<span style="display:table-cell;vertical-align:middle;background:rgba(255,255,255,0.45);color:red;borderRadius:10">'+msg+'</span>';


        na.site.setStatusMsg(html, true);
        na.m.log (3, 'na.site.ajaxFail() : msg='+msg);
        //na.analytics.logMetaEvent ('na.site.ajaxFail() : msg='+msg);
    },
    success : function (msg) {
        var html = '<table class="tableSuccess" style="width:99%;"><tr><td style="font-size:1em">'
                +'<span class="statusSuccess">'+msg+'</span>'
                + '</td><td style="width:105px;"><div class="vividButton" theme="dark" style="position:relative;color:white;width:100px;" onclick="na.site.setStatusMsg(na.site.settings.defaultStatusMsg);">Ok</div></td></table>';
        //var msg2 = '<span style="display:table-cell;vertical-align:middle;background:rgba(255,255,255,0.45);color:red;borderRadius:10">'+msg+'</span>';
        na.site.setStatusMsg(html, true);
        na.m.log (3, 'na.site.success() : msg='+msg);
        //na.analytics.logMetaEvent ('na.site.success() : msg='+msg);
    },
    setStatusMsg : function (msg, resize, showMilliseconds, fade) {
        if (resize===undefined) resize = true;
        //debugger;

        //if (!resize) na.site.settings.current.cancelAllResizeCommands = true;
        if (!showMilliseconds) showMilliseconds = 10 * 1000;
        na.site.settings.current.desktopIdle = false;
        if (fade)
        $('#siteStatusbar .vividDialogContent').stop(true,true).animate({opacity:0.0001},'fast', function () {
            na.site.setStatusMsg_do (msg, resize, showMilliseconds);
        });
        else na.site.setStatusMsg_do (msg, resize, showMilliseconds);
    },

    setStatusMsg_do : function (msg,resize,showMilliseconds) {
        $('#siteStatusbar .vividDialogContent').html(msg).delay(50).css({display:'block',margin:0}).stop(true,true).animate({opacity:1},'fast');
        $('#siteStatusbar').animate({height:'auto'}, {
            speed : 'fast',
            progress : function (evt) {
                $(window).trigger('resize');
            }
        });

        na.m.waitForCondition(
            'na.site.setStatusMsg(msg,resize,showMilliseconds) : na.m.HTMLidle()?', na.m.HTMLidle,
            function() {
                if (resize) {
                    na.site.settings.current.statusbarVisible = na.desktop.settings.visibleDivs.includes('#siteStatusbar');
                    if (!na.site.settings.current.statusbarVisible) na.desktop.settings.visibleDivs.push('#siteStatusbar');
                    $(window).trigger('resize');
                };

                if (
                    msg !== na.site.settings.defaultStatusMsg
                    && typeof showMilliseconds=='number'
                ) {
                    clearTimeout (na.site.settings.current.timeoutRevertStatusbarMsg);
                    na.site.settings.current.timeoutRevertStatusbarMsg = setTimeout (function () {
                        na.site.setStatusMsg (na.site.settings.defaultStatusMsg, false);
                        if (!na.site.settings.current.statusbarVisible) na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs,'#siteStatusbar');
                        if (resize) setTimeout(function() {
                            $(window).trigger('resize');
                        }, 1000);
                    }, showMilliseconds);
                }
            }, 200
        );
    },

    initialize : function (desktopDefinition) {
        var t = this;
        t.s = t.settings;
        t.s.c = t.settings.current;

        if (navigator.connection) {
            console.log(`Effective network type: ${navigator.connection.effectiveType}`);
            console.log(`Downlink Speed: ${navigator.connection.downlink}Mb/s`);
            console.log(`Round Trip Time: ${navigator.connection.rtt}ms`);
        } else {
            console.log('Navigator Connection API not supported');
        }

        na.desktop.initialize(desktopDefinition);

        t.components = t.c = { dialogs : {}, buttons : {}, menus : {} };
        var c = t.components;

        na.background.initialize({naSite : t});
        na.backgrounds = na.background;

        na.m.preventScreenLock();

        na.m.waitForCondition (
            'na.site.initialize : desktopIdle()? so we can do na.startUIvisuals()?',
            na.m.desktopIdle, function() {
                t.g = t.globals = $.extend (t.g, naGlobals);
                na.te = new naThemeEditor();

                debugger;
                t.reloadMenu({callback:function() {
                    debugger;
                    t.ui = {
                        vb : new vividUserInterface_2D_button_v4()
                    };
                    na.m.waitForCondition ('site.6.y.z.js::initialize()::t.reloadMenu (callback::) : na.m.desktopIdle? + 500ms?', na.desktopIdle, function() {
                        //setTimeout (function() {
                        /*
                            na.te.onload('siteContent');
                            t.setSpecificity();

                            window.onresize  = function(evt) {
                                $('#siteBackground, #siteBackground iframe, #siteBackground img, #siteBackground div').css({
                                    width : $(window).width(),
                                    height : $(window).height()
                                });
                                //debugger;
                                na.site.onresize ({ reloadMenu : true });
                                na.desktop.resize(na.site.delayedReloadMenu); // .resize() is delayed with clearTimeout() and setTimeout() - independent of .delayedReloadMenu
                            };

                        */
                        //}, 100);
                    }, 100);

                }});

                        setTimeout (function() {

                            window.onresize  = function(evt) {
                                $('#siteBackground, #siteBackground iframe, #siteBackground img, #siteBackground div').css({
                                    width : $(window).width(),
                                    height : $(window).height()
                                });
                                //debugger;
                                na.site.onresize ({ reloadMenu : true });
                                na.desktop.resize(na.site.delayedReloadMenu); // .resize() is delayed with clearTimeout() and setTimeout() - independent of .delayedReloadMenu
                            };

                            $('.vividDialog').css ({
                                overflow : 'hidden'
                            });
                            if (document.location.href.match('/wiki/')) {
                                $('#siteContent > .vividDialogContent > div').css({background:'none'});
                                $('#bodyContent div, #bodyContent a, .mw-header, .vector-pinned-container').css({background:'none'});
                                $('#bodyContent li').css({color:'yellow', lineHeight:'calc(1em + 10px)'});
                                $('.vector-appearance, .vector-column-end').css({display:'none'});
                            };
                            $('.vividDialog > .vividDialogContent').fadeIn('normal');
                            $('.lds-facebook').fadeOut('normal');

                            t.startTooltips();
                            setTimeout (function(){
                                na.background.next('#siteBackground');
                            }, 60 * 1000)
                            //na.background.next('#siteBackground');

                            na.te.onload('siteContent');
                            t.setSpecificity();
                        }, 500);


                na.site.startUIvisuals();
                //na.site.loadContent_displayContent ($('#siteContent .vividDialogContent').html());

                setTimeout (function() {
                    c.taskbar = new vividUserInterface_2D_dialog({
                        naSite : t,
                        el : $('#siteTaskbar')
                    });
                    $('.vividButton4, .vividButton_icon_50x50, .vividButton_icon_100x100').each(function(idx,el) {
                        c.buttons['#'+el.id] = new vividUserInterface_2D_button ({ naSite : t, el : el });
                    });

                    $('.vividDialog').each(function(idx,el) {
                        if (!na.site.s.c.zidx) na.site.s.c.zidx = [];
                        na.site.s.c.zidx.push ({
                          zIndex : $(el).css('zIndex')
                        })

                        $(el).css({zIndex : 10});

                        var d = new vividUserInterface_2D_dialog ({ naSite : t, el : $(el) });
                        switch (el.id) {
                            case 'siteTaskbar' : c.taskbar = d; break;
                            case 'siteSettingsMenu' : c.settingsMenu = d; break;
                            default : if ($('#'+el.id+' > .vividDialogContent').html().trim()!=='{$div_'+el.id+'}') { c.dialogs['#'+el.id] = d;  }break;
                        }
                    });
                    $('#btnSettings img').hover (function() {
                        var menu = na.site.components.menus['#siteMenu'];
                        menu.hideAll( menu, $('#siteMenu__panel__0')[0], 50 );
                        $('#siteSettingsMenu')
                            .css({display:'none', zIndex: na.site.s.c.zidx[0].zIndex})
                            .removeClass('hidden').addClass('shown');

                        setTimeout(function() {
                            $('siteSettingsMenu').css({zIndex:na.site.s.c.zidx[0].zIndex});
                        }, parseInt(na.d.g.animationSpeed)+1000);
                    }, function () {
                        $('#btnSiteOptions_container, #btnLogin_container').css({display:'flex',zIndex:10});
                        c.settingsMenu.hide({ naSite : t, checkHeldUp : '#siteSettingsMenu' });
                        $('#siteSettingsMenu').removeClass('shown').addClass('hidden');
                    });
                    $('#siteSettingsMenu').hover(function() {
                        t.settings.heldUp['#siteSettingsMenu'] = true;
                    }, function(evt) {
                        t.settings.heldUp['#siteSettingsMenu'] = false;
                        c.settingsMenu.hide({ naSite : t, checkHeldUp : '#siteSettingsMenu' });
                    });

                    //na.desktop.resize();
                    na.desktop.resize(na.site.onload_phase2, true);

                }, 500);
            }, 200
        );



        /*
        $('#btnShowStartMenu').mouseenter (function(evt) {
            var evt2 = $.extend( {}, evt);
            evt2.currentTarget = $('#siteMenu__0')[0];
            na.site.components.menus['#siteMenu'].currentEl = evt2.currentTarget;
            na.site.components.menus['#siteMenu'].onmouseover (evt2);
        });
        c.taskbar = new vividUserInterface_2D_dialog({
            naSite : t,
            el : $('#siteTaskbar')
        });
        $('.vividButton4, .vividButton_icon_50x50').each(function(idx,el) {
            c.buttons['#'+el.id] = new vividUserInterface_2D_button ({ naSite : t, el : el });
        });
        $('.vividDialog').each(function(idx,el) {
            var d = new vividUserInterface_2D_dialog ({ naSite : t, el : $(el) });
            switch (el.id) {
                case 'siteTaskbar' : c.taskbar = d; break;
                case 'siteSettingsMenu' : c.settingsMenu = d; break;
                default : if ($('#'+el.id+' > .vividDialogContent').html().trim()!=='{$div_'+el.id+'}') { c.dialogs['#'+el.id] = d;  }break;
            }
        });
        $('#btnSettings').hover (function() {
            var menu = na.site.components.menus['#siteMenu'];
            menu.hideAll( menu, $('#siteMenu__panel__0')[0], 50 );
            $('#siteSettingsMenu').removeClass('hidden').addClass('shown');
        }, function () {
            c.settingsMenu.hide({ naSite : t, checkHeldUp : '#siteSettingsMenu' });
            //$('#siteSettingsMenu').removeClass('shown').addClass('hidden');
        });
        $('#siteSettingsMenu').hover(function() {
            t.settings.heldUp['#siteSettingsMenu'] = true;
        }, function(evt) {
            t.settings.heldUp['#siteSettingsMenu'] = false;
            c.settingsMenu.hide({ naSite : t, checkHeldUp : '#siteSettingsMenu' });
        });
        */

        document.addEventListener ('keyup', function (e) {
            e.preventDefault();

            if (e.altKey && e.code=='KeyB') {
                na.backgrounds.next('#siteBackground');
                //debugger;
            };

        });

        //setInterval (t.backgrounds.next, 60 * 1000);
        setInterval (t.updateSiteDatetime, 1000);
        t.updateSiteDatetime();
        //setTimeout (function() {
            //debugger;
        //}, 5);


        t.transformLinks ($('#siteContent')[0]);
		History.Adapter.bind(window,'statechange', na.site.stateChange); // use HTML5 History API if available:

        t.s.c.booted = true;

        //console.log (this);
        return this;
    },

    reloadMenu : function (settings) {
        // only drastically slows things down
        //na.desktop.resize(null, false);
        //na.site.onresize ({ reloadMenu:false });


        //na.m.waitForCondition ('na.site.reloadMenu() : na.m.HTMLidle() && !na.site.settings.current.startingApps?', function() {
        na.m.waitForCondition ('na.site.reloadMenu() : na.m.HTMLidle()?', function() {
            var r =
                na.m.HTMLidle()
                //&& !na.site.settings.current.startingApps;
            return r;
        }, function() {
            var
            callback3x = (settings ? settings.callback : null),
            callback2b = function () {
                na.m.log (210, '<UL> & <LI> DATA LOADED FOR #siteMenu', false);
                na.m.log (210, 'STARTING TO RE-INITIALIZE #siteMenu', false);

                setTimeout (function() {
                    $('#siteMenu').css({zIndex:800*1000});
                    na.site.settings.menus['#siteMenu'] = new naVividMenu($('#siteMenu')[0], function(menu) {
                        na.m.log (210, 'DONE RE-INITIALIZING #siteMenu', false);
                        var topLevelItemCount = $('.vividMenu_mainUL > li', menu).length;
                        //debugger;

                        if (settings) settings.naVividMenu_menuInitialized = menu;
                        if (typeof callback3x=='function') callback3x (settings);
                    });
                }, 50);
            };

            na.site.reloadMenu_reOrganise (callback2b);
            na.site.renderAllCustomHeadingsAndLinks();
        }, 50);
    },

    onresize : function(settings) {
            $('#siteBackground, #siteBackground iframe, #siteBackground img, #siteBackground div').css({
                width : $(window).width(),
                height : $(window).height()
            });
        //$('#siteBackground img.bg_first').fadeIn(2000);

        // fix attempts (all failed) for [apple bug 1] orientation change bug on iphone 6
        $('body')[0].scrollLeft = 0;//	$('body')[0].style.position = 'relative';
        $('body')[0].scrollTop = 0;//	$('body')[0].style.position = 'relative';

        $('html')[0].scrollLeft = 0;
        $('html')[0].scrollTop = 0;
        $('html')[0].style.display = 'none';
        $('html')[0].style.display = 'block';

        if (typeof settings=='object' && settings.possiblyChangeBackground) {
            var oldBSK = na.site.globals.backgroundSearchKey;
            if (oldBSK==='' || oldBSK=='landscape' || oldBSK=='portrait') {
                if ( parseFloat($(window).width()) > parseFloat($(window).height()) )
                    na.site.globals.backgroundSearchKey = 'landscape';
                else
                    na.site.globals.backgroundSearchKey = 'portrait';
            }
            if (oldBSK !== '' && oldBSK != na.site.globals.backgroundSearchKey)
                na.backgrounds.next (
                    '#siteBackground',
                    na.site.globals.backgroundSearchKey,
                    null,
                    false
                );
        };

        if (
            na.apps.loaded[na.site.settings.current.app]
            && typeof na.apps.loaded[na.site.settings.current.app].preResize == 'function'
        ) na.apps.loaded[na.site.settings.current.app].preResize ( {} );

        na.desktop.resize(function (div, calculationResults, sectionIdx, section, divOrderIdx) {
            if (!settings) settings = {};
            if (!settings.finalized) {
                settings.finalized = true;

                na.site.settings.current.siteInitialized = true;

                na.site.reloadMenu();

                na.site.onresize_doContent(settings);



                if (typeof settings=='object' && typeof settings.callback=='function') {

                    var cb2 = function (settings) {
                        settings.callback = settings.callback_naSiteOnresize;
                        delete settings.callback_naSiteOnresize;
                        if (
                            (typeof settings=='object' && settings.reloadMenu===true)
                        ) na.site.reloadMenu(settings);
                        else if (typeof settings=='object' && typeof settings.callback=='function') settings.callback();
                    }

                    var cb = settings.callback;
                    settings.callback_naSiteOnresize = cb;
                    settings.callback = function() {
                        na.site.settings.current.numAppsResizing = 0;
                        na.site.settings.current.numAppsResized = 0;
                        na.site.settings.current.appsResizing = {};
                        cb2(settings);
                    };
                } else
                    settings.callback = function() {
                        na.site.settings.current.numAppsResizing = 0;
                        na.site.settings.current.numAppsResized = 0;
                        na.site.settings.current.appsResizing = {};
                        //cb2(settings);
                    };

                na.site.resizeApps(settings.callback);
            }
        });


    },

    onresize_doContent : function (settings) {
        //debugger;
        startLogo('neCompanyLogo', 'countryOfOriginColors');
        return false;
        /*
        if ($(window).width() < na.site.globals.reallySmallDeviceWidth) {
            na.site.settings.current.fontSize_siteContent = $('#siteContent').css('fontSize');
            na.site.settings.current.fontSize_siteStatusbar = $('#siteStatusbar').css('fontSize');
            $('#siteContent, #siteStatusbar').css ({ fontSize : '70%' });
            $('#siteStatusbar').css({height:'5.5rem'});
            $('#siteStatusbar .vividButton').css({width : 40});
            $('#siteStatusbar td:nth-child(2)').css({width:55});
            $('#tdFor_neCompanyLogo').css ({ width : 80, height : 80 });
            $('#tableFor_neCompanyLogo').css ({ width : 80, height : 80 });
            $('#divFor_neCompanyLogo').css ({ width : 70, height : 70, marginLeft : 0 });
            $('#mainCSS').html('.vividMenu_item td { font-size : 11px; }; #siteStatus td { font-weight : bold };');
            $('html, body, p, span, ul, ol, li, div').not('.vt, .vividButton, .vividMenu_item, .subMenu, .contentMenu').css({fontSize:'0.7rem'});
            na.site.settings.current.menuFontSize = '11px';
            //$('.vividMenu .vividButton').css({ width : 100, height : 10 });
            $('#neCompanyLogo').attr('width',70).attr('height',70);
            $('.td_spacer').css ({ height : 100 });
            if ($('#headerSite').length===1) {
                $('#headerSite').css ({ height:100, padding : 5, paddingLeft : 5 });
                $('#headerSite, #headerSite h1').css({ fontSize : '1rem' });
                $('#headerSite h2, #headerSite h3').not('.subMenu, .contentMenu').css ({ fontSize : '0.7rem' });
                var w = 200;//$('#siteContent .vividDialogContent').width() - $('#headerSite').offset().left;
                $('#headerSiteDiv').css ({ height : 80, width : w, paddingTop : 10 });
                $('#headerSiteDiv div').css ({ height : 0, width : w });
                $('.contentSectionTitle1').css({fontSize:'1em'});
            }
            $('#newsApp_title, #newsApp_info, #newsApp_timer').css({fontSize:'0.7rem'});
        } else if ($(window).width() < na.site.globals.smallDeviceWidth) {
            if (na.site.settings.current.fontSize_siteContent) {
                $('#siteContent').css ({ fontSize : na.site.settings.current.fontSize_siteContent });
                $('#siteStatusbar').css ({ fontSize : na.site.settings.current.fontSize_siteStatusbar });
            };
            $('#siteStatusbar').css({height:'4.5rem'});
            $('#siteStatusbar .vividButton').css({width : 100});
            $('#siteStatusbar td:nth-child(2)').css({width:105});
            $('#mainCSS').html('.vividMenu_item td { font-size : 14px; }; #siteStatus td { font-weight : bold };');
            na.site.settings.current.menuFontSize = '14px';
            //$('.vividMenu .vividButton').css({ width : 135, height : 14 });
            $('#tdFor_neCompanyLogo').css ({ width : 200, height : 200 });
            $('#tableFor_neCompanyLogo').css ({ width : 200, height : 200 });
            $('#divFor_neCompanyLogo').css ({ width : 200, height : 200});
            $('#datetime').css({marginLeft:40,marginTop:20});
            $('#neCompanyLogo').attr('width',200).attr('height',200);
            $('html, body, p, span, ul, ol, li, div').not('.vt, .vividButton, .vividMenu_item, .subMenu, .contentMenu').css({fontSize:'0.85rem'});
            $('.td_spacer').css ({ height : 100 });
            if ($('#headerSite').length===1) {
                $('#headerSite').css ({ height : 100, padding : 5, paddingLeft : 5 });
                $('#headerSite, #headerSite h1').css({ fontSize : '1rem' });
                $('#headerSite h2, #headerSite h3').css ({ fontSize : '0.8rem' });
                $('#newsApp_title, #newsApp_info, #newsApp_timer').css({fontSize:'0.8rem'});
                var w = 250;//$('#siteContent .vividDialogContent').width() - $('#headerSite').offset().left;
                $('#headerSiteDiv').css ({ height : 200, width : w, paddingTop : 20 });
                $('#headerSiteDiv div').css ({ height : 0, width : w });
                $('.contentSectionTitle1').css({fontSize:'1.5em'});
            }
            $('#newsApp_title, #newsApp_info, #newsApp_timer').css({fontSize:'0.85rem'});
        } else {
            if (na.site.settings.current.fontSize_siteContent) {
                $('#siteContent').css ({ fontSize : na.site.settings.current.fontSize_siteContent });
                $('#siteStatusbar').css ({ fontSize : na.site.settings.current.fontSize_siteStatusbar });
            };
            $('#siteStatusbar').css({height:'4.5rem'});
            $('#siteStatusbar .vividButton').css({width : 220});
            $('#siteStatusbar td:nth-child(2)').css({width:225});
            $('#mainCSS').html('.vividMenu_item td { font-size : 14px; }; #siteStatus td { font-weight : bold };');
            na.site.settings.current.menuFontSize = '14px';
            //$('.vividMenu .vividButton').css({ width : 220, height : 20 });
            $('#tdFor_neCompanyLogo').css ({ width : 200, height : 200 });
            $('#tableFor_neCompanyLogo').css ({ width : 200, height : 200 });
            $('#divFor_neCompanyLogo').css ({ width : 200, height : 200 });
            $('#datetime').css({marginLeft:40,marginTop:20});
            $('#neCompanyLogo').attr('width',200).attr('height',200);
            $('html, body, p, span, ul, ol, li, div').not('.vt, .vividButton, .vividMenu_item, .subMenu, .contentMenu').css({fontSize:'1rem'});
            $('.td_spacer').css ({ height : 100 });
            if ($('#headerSite').length===1) {
                $('#headerSite').css ({ height : 220, padding : 5, paddingLeft : 5 });
                $('#headerSite, #headerSite h1').css({ fontSize : '1.4rem' });
                $('#headerSite h2, #headerSite h3').css ({ fontSize : '1rem' });
                $('#newsApp_title, #newsApp_info, #newsApp_timer').css({fontSize:'1.15rem'});
                var w = 250;//$('#siteContent .vividDialogContent').width() - $('#headerSite').offset().left;
                $('#headerSiteDiv').css ({ height : 200, width : w, paddingTop : 20 });
                $('#headerSiteDiv div').css ({ height : 0, width : w });
                $('.contentSectionTitle1').css({fontSize:'2em'});
            }
            $('#newsApp_title, #newsApp_info, #newsApp_timer').css({fontSize:'1rem'});
        };

        startLogo('neCompanyLogo', 'countryOfOriginColors');
        */
    },

    reloadMenu_reOrganise : function(callback4a) {

        if (!$('#siteMenu_vbChecker')[0]) $('#siteMenu').append('<div id="siteMenu_vbChecker" class="vividButton vividButton_text vividMenu_item" theme="'+$('#siteMenu').attr('theme')+'" style="opacity:0.0001;position:absolute;">abc XYZ</div>');

        var
        fncn = 'na.site.reloadMenu_forTheFirstTime(callback)',
        menuItemWidth = $('#siteMenu_vbChecker').outerWidth(),
        numRootItems = $('#siteMenu').width() / menuItemWidth,
        nri = Math.floor(numRootItems) > 2 ? Math.floor(numRootItems) : 1,
        mlp = '<li class="contentMenu"><a class="contentMenu" href="-contentMenu-">-contentMenu-</a></li>',
        contentMenu = $('#app_mainmenu li')[0] ? '<li class="contentMenu_populated">'+$('#app_mainmenu li')[0].innerHTML+'</li>' : '';

        var
        widest = { rootItems : 0, layout : null },
        hit = { rootItems : 0, layout : null };

        $('.vividMenu_layout').each (function(idx,layout) {
            var
            iw = parseInt($(layout).attr('itemsLevel1'));

            if (iw > widest.rootItems) widest = { rootItems : iw, layout : layout };
            if (iw === nri) hit = { rootItems : iw, layout : layout };
        });
        if (!hit.layout) hit = widest;

        var
        menu = $('#siteMenu'),
        items = $('.vividMenu_mainUL', menu),
        segs = $('.vividMenu_segments', menu);
        $('.vividMenu_item', menu).remove();

        items.html(hit.layout.innerHTML);
        $('.subMenu, .vividMenu_subMenuPanel', items).each(function (idx, subMenu) {
            var
            smID = '#subMenu__'+$(subMenu).attr('subMenuID');
            //smID = '.subMenu[submenuid="'+$(subMenu).attr('subMenuID')+'"]'; // only to be used when experiencing DNS problems
            items.html (
                items[0].innerHTML.replace( subMenu.outerHTML, $(smID)[0].outerHTML )
            );
        });

        var
        menu = items[0].innerHTML,
        p1 = menu.indexOf(mlp),
        mt = menu.substr(0,p1) + contentMenu + menu.substr(p1+mlp.length);

        items[0].innerHTML = mt;
        var il1 = parseInt($('#siteMenu ul').attr('itemslevel1'));
        //if (mt.indexOf('-contentMenu-')===-1) $('#siteMenu ul').attr('itemslevel1', ''+(il1-1));
        //debugger;

        na.site.transformLinks ($('#siteMenu_items')[0]);
        if (typeof callback4a=='function') callback4a ( menu );
    },

    changeBackground : function () {
        na.m.log (50, 'next background : '+na.site.globals.backgroundSearchKey);
        na.backgrounds.next ('#siteBackground', na.site.globals.backgroundSearchKey, null, true);
    },

    error : function (errorHTML) {
        // detailed (internal) status information in HTML should also be passed to *this* function.
        na.site.setStatusMsg (errorHTML);
        //na.site.displayErrorWindow(errorHTML); -> uses a different input data format these days.
    },

    fail : function (msg, xhr, ajaxOptions, errorFunction) {
        //for na.site.setStatusMsg()
        //var html = '<table class="tableFail" style="width:100%;height:100%;"><tr><td style="font-size:1.5em">'
                //+'<span class="statusFail_nonGlow">'+msg+'</span>'
                //+ '</td><td style="width:105px;"><div class="vividButton" theme="dark" style="position:relative;color:white;width:100px;" onclick="na.site.setStatusMsg(na.site.settings.defaultStatusMsg);">Ok</div></td></table>';
        na.site.error(msg);
        na.m.log (3, 'na.site.fail() : msg='+msg);
        //na.analytics.logMetaEvent ('na.site.fail() : msg='+msg);

        if (typeof errorFunction=='function') errorFunction();
    },
    ajaxFail : function (location, url, xhr, ajaxOptions, thrownError) {
        var
        msg = 'AJAX error ('+location+') : '+thrownError+':<br/>url = '+url;

        if (location=='na.site.testDBconnection()' && thrownError=='Internal Server Error') {
            msg = 'Database cookie expired. Please log in again.';
            na.site.displayLogin();
        }

        var
        html = '<table class="tableFail" style="width:99%;"><tr><td style="font-size:1em">'
                +'<span class="statusFail">'+msg+'</span>'
                + '</td><td style="width:105px;"><div class="vividButton" theme="dark" style="position:relative;color:white;width:100px;" onclick="na.site.setStatusMsg(na.site.settings.defaultStatusMsg);">Ok</div></td></table>';
        //var msg2 = '<span style="display:table-cell;vertical-align:middle;background:rgba(255,255,255,0.45);color:red;borderRadius:10">'+msg+'</span>';


        na.site.setStatusMsg(html, true);
        na.m.log (3, 'na.site.ajaxFail() : msg='+msg);
        //na.analytics.logMetaEvent ('na.site.ajaxFail() : msg='+msg);
    },
    success : function (msg) {
        var html = '<table class="tableSuccess" style="width:99%;"><tr><td style="font-size:1em">'
                +'<span class="statusSuccess">'+msg+'</span>'
                + '</td><td style="width:105px;"><div class="vividButton" theme="dark" style="position:relative;color:white;width:100px;" onclick="na.site.setStatusMsg(na.site.settings.defaultStatusMsg);">Ok</div></td></table>';
        //var msg2 = '<span style="display:table-cell;vertical-align:middle;background:rgba(255,255,255,0.45);color:red;borderRadius:10">'+msg+'</span>';
        na.site.setStatusMsg(html, true);
        na.m.log (3, 'na.site.success() : msg='+msg);
        //na.analytics.logMetaEvent ('na.site.success() : msg='+msg);
    },
    setStatusMsg : function (msg, resize, showMilliseconds, fade) {
        if (resize===undefined) resize = true;
        //debugger;

        //if (!resize) na.site.settings.current.cancelAllResizeCommands = true;
        if (!showMilliseconds) showMilliseconds = 10 * 1000;
        na.site.settings.current.desktopIdle = false;
        if (fade)
        $('#siteStatusbar .vividDialogContent').stop(true,true).animate({opacity:0.0001},'fast', function () {
            na.site.setStatusMsg_do (msg, resize, showMilliseconds);
        });
        else na.site.setStatusMsg_do (msg, resize, showMilliseconds);
    },

    setStatusMsg_do : function (msg,resize,showMilliseconds) {
        $('#siteStatusbar .vividDialogContent').html(msg).delay(50).css({display:'block',margin:0}).stop(true,true).animate({opacity:1},'fast');
        $('#siteStatusbar').animate({height:'auto'}, {
            speed : 'fast',
            progress : function (evt) {
                $(window).trigger('resize');
            }
        });

        na.m.waitForCondition(
            'na.site.setStatusMsg(msg,resize,showMilliseconds) : na.m.HTMLidle()?', na.m.HTMLidle,
            function() {
                if (resize) {
                    na.site.settings.current.statusbarVisible = na.desktop.settings.visibleDivs.includes('#siteStatusbar');
                    if (!na.site.settings.current.statusbarVisible) na.desktop.settings.visibleDivs.push('#siteStatusbar');
                    $(window).trigger('resize');
                };

                if (
                    msg !== na.site.settings.defaultStatusMsg
                    && typeof showMilliseconds=='number'
                ) {
                    clearTimeout (na.site.settings.current.timeoutRevertStatusbarMsg);
                    na.site.settings.current.timeoutRevertStatusbarMsg = setTimeout (function () {
                        na.site.setStatusMsg (na.site.settings.defaultStatusMsg, false);
                        if (!na.site.settings.current.statusbarVisible) na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs,'#siteStatusbar');
                        if (resize) setTimeout(function() {
                            $(window).trigger('resize');
                        }, 1000);
                    }, showMilliseconds);
                }
            }, 200
        );
    },

    onclick_displayErrors : function (event) {
        var
        msg = '',
        dat = na.site.settings.current.errors;
        for (var i=0; i < dat.session.length; i++) {
            msg += dat.session[i];
        };

        dat.php.sort (function (a,b) {
            return b.t - a.t; // newest entries listed at the top please
        });
        for (var i=0; i<dat.php.length; i++) {
            var dit = dat.php[i];
            for (var j=0; j<dit.entries.length; j++) {
                var dit2 = dit.entries[j];
                for (var k in dit2) {
                    var dit3 = dit2[k];
                    msg += dit3.html;
                }
            }
        };

        var show = typeof msg==='string' && msg !== '';

        msg =
            msg
            .replace(/\\n/g, '<br/>')
            .replace(/\\"/g, '"')
            .replace(/\\\//g, '/');
        $('#siteErrors_msg').html(msg);

        if (show) {
            if (!na.desktop.settings.visibleDivs.includes('#siteErrors'))
                na.desktop.settings.visibleDivs.push ('#siteErrors');
            na.desktop.settings.visibleDivs.remove ('#siteContent');
            na.desktop.settings.visibleDivs.remove ('#siteStatusbar');
            //$('#siteErrors').css({opacity:1,display:'none'}).fadeIn('normal', function() {
                /*  $('#siteErrors').css({
                    width : $(window).width()-20,
                    height : $(window).height()-20,
                    left : 10,
                    top : 10
                });
                $('#tabPagesLog_content').css({
                    height : $(window).height()-102,
                    width : $(window).width()-46
                });*/
            //});
        } else {
            //na.site.setStatusMsg ('<div class="naNoErrors">No errors found since you last reloaded this page (F5). There may be errors listed in the operating system logs. You may need to sprinkle the suspected code with extra debugger statements that send an E_NOTICE to PHP\'s trigger_error() function.</div>', true, 10 * 1000);
            na.desktop.settings.visibleDivs.remove ('#siteErrors');
            if (!na.desktop.settings.visibleDivs.includes('#siteContent'))
                na.desktop.settings.visibleDivs.push ('#siteContent');
            /*if (!na.desktop.settings.visibleDivs.includes('#siteStatusbar'))
                na.desktop.settings.visibleDivs.push ('#siteStatusbar');*/
            //$('#siteErrors').css({opacity:1,display:'block'}).fadeOut('normal');
        };
        //setTimeout (na.desktop.resize, 2500);
        na.desktop.resize(function () {
            $('#tabPagesLog_content').css({
                height : $('#siteErrors').height()
                    - $('#siteErrors .vividTabPage_header').height()
            });
        });

    },


    delayedReloadMenu : function () {
        if (na.site.settings.timeoutWindowResize) clearTimeout(na.site.settings.timeoutWindowResize);
        na.site.settings.timeoutWindowResize = setTimeout (function() {
            na.site.onresize({reloadMenu : true, possiblyChangeBackground:true});
        }, 500);
    },

    loadModule : function (url, appName, jsClassName, jsVarName) {
        if (!appName.match(/[\w]+/)) {
            na.m.log (1, 'ERROR : na.loadModule() : appName parameter incorrect.');
            debugger;
            return false;
        }
        if (!jsClassName.match(/[\w_]+/)) {
            na.m.log (1, 'ERROR : na.loadModule() : jsClassName parameter incorrect.');
            debugger;
            return false;
        }
        if (!jsVarName.match(/[\w\.]*/)) {
            na.m.log (1, 'ERROR : na.loadModule() : jsVarName parameter incorrect.');
            debugger;
            return false;
        }
        if (
            !url.match ('https://'+na.site.globals.domain)
            && !url.match (/^\//)
        ) {
            na.m.log (1, 'ERROR : na.loadModule() : url parameter incorrect, for security reasons. url='+url);
            debugger;
            return false;
        };
        import (url).then((module) => {
            var js =
                'na.apps["'+appName+'"] = {'
                +'settings : new module.'+jsClassName+'('+jsVarName+')'
                +'}';
            eval (js);
        });
    },

    // BEGIN na.site.LoadContent()
    loadContent : function (event, url, callback_phase1, callback_phase2) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
        na.apps.mustHaveAtLeast_number = 0;
        na.site.settings.url = url;
        //if (na.site.globals.debug['na.site.loadContent']) alert (url);

        //na.desktop.setConfig ('content');

        var
        dateObj = new Date(),
        timeInMilliseconds = dateObj.getTime(),
        appRunTime = timeInMilliseconds - na.m.settings.siteStartTime,
        timeString_runningPage = na.m.secondsToTimeString (appRunTime / 1000),
        timeString_now = na.m.dateObj_toDateString (dateObj),
        timeString = timeString_now+' (@'+timeString_runningPage+' now)',
        dt = { dateObj : dateObj, timeString : timeString },

        ec = na.m.newEventChain(dt, {
            root : {
                labels : { marker : {
                    whatsThis : 'na.m.site.loadContent() : url='+url,
                    stacktrace : na.m.stacktrace(),
                    HTMLevent : event
                }},
                functions : [
                    { callback_phase1 : [na.m.newEventFunction (callback_phase1)] },
                    { callback_phase2 : [na.m.newEventFunction (callback_phase2)] }
                ]
            }
        }),

        c = na.site.settings,
        lc = c.loadContent,
        lcr = lc.recent,
        lcc = lc.current;

        lcc.ec = ec;

        ec.displayStatusUpdates = true;
        ec.isCurrentEventChain_for__na_site_loadContent = true;
        na.m.makeEventsChain_theCurrentOne (lc, ec);

        //na.desktop.settings.visibleDivs = na.desktop.globals.visibleDivs;
        //na.desktop.resize();

   // debugger;
        if (!url.match(/\/view\//) && url.indexOf('/')===0) {
            debugger;
            History.pushState (null, '', document.location.origin+url);
        } else if (url.indexOf('/')===-1) {
            History.pushState (null, '', document.location.origin+'/view/'+url);
        } else debugger;

        event.preventDefault();
    },

	stateChange : function(evt){
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
		var
		c = na.site.settings,
        lcc = c.loadContent.current;
        debugger;

        evt.preventDefault();

        if (!lcc.ec) {
            var
            dateObj = new Date(),
            timeInMilliseconds = dateObj.getTime(),
            appRunTime = timeInMilliseconds - na.m.settings.siteStartTime,
            timeString_runningPage = na.m.secondsToTimeString (appRunTime / 1000),
            timeString_now = na.m.dateObj_toDateString (dateObj),
            timeString = timeString_now+' (@'+timeString_runningPage+' now)',
            dt = { dateObj : dateObj, timeString : timeString },
            state = History.getState(),
            url1 = state.url.replace(document.location.origin,'').replace('/view-content/', '').replace(/^\//,'');

            var
            c = na.site.settings,
            lc = c.loadContent,
            lcr = lc.recent,
            lcc = lc.current;
            ec = na.m.newEventChain(dt, {
                root : {
                    labels : { marker : {
                        whatsThis : 'na.site.stateChange() : url='+state.url,
                        stacktrace : na.m.stacktrace(),
                        HTMLevent : event
                    }},
                    functions : []
                }
            });
            ec.displayStatusUpdates = true;
            ec.isCurrentEventChain_for__na_site_loadContent = false;
            //lcc.ec = ec;
            na.m.makeEventsChain_theCurrentOne (lc, ec);
        } else {
            var
            ec = lcc.ec,

            state = History.getState(),
            url1 = state.url.replace(document.location.origin,'')./*replace('/view/', '').*/replace(/^\//,'');
        }

        if (url1==='') url1 = '/';

        na.m.log (200, 'na.s.c.stateChange(2) : na.site.settings.url='+state.url);
        na.site.settings.url = state.url;
        debugger;
        na.site.loadContent_getContent (ec, url1); // also displays the content
	},

    loadContent_getContent : function (ec, url1) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
        var
        fncn = 'na.site.loadContent_getContent()',
        reloadMenu = false,
		state = History.getState(),
        c = na.site.settings,
        lc = c.loadContent,
        lcc = lc.current,
        reports = [];

        //na.site.closeAll_2D_apps();
        //na.site.closeAll_3D_apps();

        //na.an.logEvent(na.site.settings.event);

        if (url1.match('/view-content/')) {
            var
            url2 = url1
                    .replace(document.location.origin,'')
                    .replace(document.location.host,'')
                    .replace('/view-content/', ''),
            url3 = url1;
        } else if (url1.match('/view/')) {
            var
            url2 = url1
                    .replace(document.location.origin,'')
                    .replace(document.location.host,'')
                    .replace('/view-content/', ''),
            url3 = url1;
        } else {
            var
            url2 = url1.replace(document.location.origin,'').replace(document.location.host,''),
            url3 = url2;
        };
        url3 = url3.indexOf('/')===-1 ? '/view-content/'+url3 : '/'+url3;

        try {
            //  debugger;
            var app = url1.match(/\/view-content/)?JSON.parse(na.m.base64_decode_url(url2)):{};
        } catch (error) {
            appValidJSON = false;
            na.site.settings.loadContent_appValidJSON = appValidJSON;
            var msg = na.m.log (11, 'na.site.loadContent_getContent() : base64 decode error *or* JSON decode error in loadContent_getContent() for <b>url3</b>='+url3+', error='+error.message+', base64 data='+url2+', JSON data='+na.m.base64_decode_url(url2), false);
            reports.push (msg);
            na.site.fail (msg, null);
        };

        var appValidJSON = app !== undefined; //(url2.indexOf('/')!==0);

        var
        dateObj = new Date(),
        timeInMilliseconds = dateObj.getTime(),
        appRunTime = timeInMilliseconds - na.m.settings.siteStartTime,

        timeString_runningPage = na.m.secondsToTimeString (appRunTime / 1000),
        timeString_now = na.m.dateObj_toDateString (dateObj),
        timeString = timeString_now+' (@'+timeString_runningPage+' now)',

        dt = { dateObj : dateObj, timeString : timeString },

        naEventData = na.m.newEvent (dt, {
            loadContent_getContent : {
                reports : { plaintext : reports },
                labels : { marker : {
                    whatsThis : fncn+' : url1='+url1+', url2='+url2+', url3='+url3,
                    stacktrace : na.m.stacktrace(),
                    HTMLevent : event
                }},
                params : {
                    url : state.url,
                    urlTransformedA : url1,
                    urlTransformedB : url2,
                    urlTransformedC : url3,
                    appValidJSON : appValidJSON
                },
                functions : [
                    { ignoreThis : [null] }
                ]
            }

        });
        ec.events.push(naEventData);

        var
        fncn = (
            url2.match(/\/view\//)
                ? fncn+':: app='+JSON.stringify(app)+', app==valid JSON='+(appValidJSON?'true':'false')+ ', url3='+url3
                : fncn+':: url2='+url2
        ),
        loadContent_getContent_do = function () {
        /*
        * LICENSE : https://opensource.org/license/mit
        * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
        * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
        */
            $('.lds-facebook').fadeIn('normal');

            var
            ac = {
                type : 'GET',
                url : url3,
                success : na.site.loadContent_displayContent,
                error : function (xhr, textStatus, errorThrown) {
                    var fncn = 'na.site.loadContent_getContent_do()::error()';

                    $('.lds-facebook').fadeOut('normal');

                    if (xhr.status===302) {
                        var msg = na.m.log (11, fncn+' : REDIRECTED (HTTP 302) -- probably an SEO_value URL -- now calling na.site.loadContent_displayContent(eventData,  xhr.responseText, textStatus, xhr);', false);

                        eventData.reports.plaintext.push (msg);

                        debugger;
                        na.site.loadContent_displayContent(xhr.responseText, textStatus, xhr);
                        return false;
                    };

                    if (url3.match(/\/view-content\//)) {
                        var
                        url4 = url2.replace(document.location.origin,'').replace(document.location.host,'').replace('/view_content/', ''),
                        app = JSON.parse(na.m.base64_decode_url(url4));
                    } else {
                        var
                        app = {
                            url : url3.replace(document.location.origin,'').replace(document.location.host,'')
                        };
                    };
                    na.site.ajaxFail(fncn, JSON.stringify(app), xhr, textStatus, errorThrown);
                }
            };
            debugger;

            ac.url = ac.url.replace('\/\/','/');
            $.ajax(ac);

            /*
            if (!url1.match(/\/view\//) && url1.indexOf('/')===0) {
                na.analytics.logMetaEvent('na.site.loadContent() : url='+url1);
            } else {
                na.analytics.logMetaEvent('na.site.loadContent() : url2='+url2);
            }
            */
        };

        if (app && app.meta && app.meta.mustBeLoggedIn) {
            if (false /*$.cookie('cdb_loginName')==='Guest'*/) {
                na.site.settings.postLoginSuccess = loadContent_getContent_do;
                na.site.displayLogin();
            } else loadContent_getContent_do();
        } else loadContent_getContent_do();
    },



    loadContent_displayContent (data, ts, xhr) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */

        $('.lds-facebook').fadeOut('normal');

        var
        c = na.site.settings,
        lc = c.loadContent,
        lcc = lc.current;
        debugger;

        // stage 001 : call the .ondestroy() handler for all running apps
        for (var appID in na.apps.loaded) {
            var app = na.apps.loaded[appID];
            if (typeof app=='object') {
                for (var divID in app.settings.loadedIn) {
                    if (typeof app.settings.loadedIn[divID].ondestroy == 'function') {
                        app.settings.loadedIn[divID].ondestroy();
                    }
                }
            }
            setTimeout (function(appID) {
                delete na.apps.loaded[appID];
            }, 500, appID);
        }
        na.apps.loaded = {};

/*
        // stage 002 : hide all the toolbar DIVs (apps loaded in this loadContent() call will have to make them visible again themselves during their onload() code call
        na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs,'#siteToolbarTop'); $.cookie('visible_siteToolbarTop','', na.m.cookieOptions());
        na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs,'#siteErrors'); $.cookie('visible_siteErrors','', na.m.cookieOptions());
        na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs,'#siteToolbarLeft'); $.cookie('visible_siteToolbarLeft','', na.m.cookieOptions());
        na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs,'#siteToolbarRight'); $.cookie('visible_siteToolbarRight','', na.m.cookieOptions());
        na.desktop.resize();
*/
        //na.desktop.setConfig('content');



        var
        fncn = 'na.site.loadContent_displayContent(data,ts,xhr)',
        c = na.site.settings,
        divIdx = -1;

        c.startingScripts = true;
        c.scriptsLoaded = 0;
        c.scriptsToLoad = 0;
        c.scriptsToLoadTotal = 0;
        c.divsInitializing = [];

        // stage 003 : attempt to decode the HTTP-delivered JSON that supplies the HTML and JS for the new page (url2a) and all the apps on that page.
        debugger;
        try {
            var dat = JSON.parse(data);
        } catch (error) {
            dat = { siteContent : data };

                //var msg = na.m.log (11, fncn+' : JSON decode error in <b>data</b> error='+error.message+', in data='+data, false);
                //reports.push (msg);

            //var msg = na.m.log (11, fncn+' : JSON decode error in data, error='+error.message, false);
            //na.site.fail (msg, xhr);
            //$('#siteContent > .vividDialogContent').html (data);
            //return false;
        };

        //debugger;
        // start the rest of the page startup processing
        var
        dateObj = new Date(),
        timeInMilliseconds = dateObj.getTime(),
        appRunTime = timeInMilliseconds - na.m.settings.siteStartTime,

        timeString_runningPage = na.m.secondsToTimeString (appRunTime / 1000),
        timeString_now = na.m.dateObj_toDateString (dateObj),
        timeString = timeString_now+' (@'+timeString_runningPage+' now)',

        dt = { dateObj : dateObj, timeString : timeString },

        naEventData = na.m.newEvent (dt, {
            loadContent_displayContent : {
                //dt : { created : dt, starts : dt, completed : dt },
                labels : { marker : { whatsThis : fncn+'::lcc.ec.events.push() called' } },
                params : {
                    data : data,
                    dat : dat
                },
                functions : [
                    { ignoreThis : [{completed:true}] }
                ]
            }
        });

        if (!lcc.ec) {
            var
            dateObj = new Date(),
            timeInMilliseconds = dateObj.getTime(),
            appRunTime = timeInMilliseconds - na.m.settings.siteStartTime,
            timeString_runningPage = na.m.secondsToTimeString (appRunTime / 1000),
            timeString_now = na.m.dateObj_toDateString (dateObj),
            timeString = timeString_now+' (@'+timeString_runningPage+' now)',
            dt = { dateObj : dateObj, timeString : timeString },
            state = History.getState(),
            url1 = state.url.replace(document.location.origin,'').replace('/view-content/', '').replace(/^\//,'');

            var
            c = na.site.settings,
            lc = c.loadContent,
            lcr = lc.recent,
            lcc = lc.current;
            ec = na.m.newEventChain(dt, {
                root : {
                    labels : { marker : {
                        whatsThis : 'na.site.stateChange() : url='+state.url,
                        stacktrace : na.m.stacktrace(),
                        HTMLevent : event
                    }},
                    functions : []
                }
            });
            ec.displayStatusUpdates = true;
            ec.isCurrentEventChain_for__na_site_loadContent = false;
            //lcc.ec = ec;
            na.m.makeEventsChain_theCurrentOne (lc, ec);
        } else {
            var
            ec = lcc.ec,

            state = History.getState(),
            url1 = state.url.replace(document.location.origin,'')./*replace('/view/', '').*/replace(/^\//,'');
        }


        lcc.ec.events.push(naEventData);
        na.site.settings.running_loadTheme = true;
        na.site.settings.running_loadContent = true;

        na.m.runFunctions (lcc.ec, na.m.updateEvent (dt, {
            loadContent_displayContent : {
                labels : { marker : { whatsThis : fncn+'::na.m.runFunctions() called' } },
                newFunctions : [
                    { initializeScriptsForApps : [na.m.newEventFunction (na.site.initializeScriptsForApps, { dat : dat })] },
                    { initializeApps : [na.m.newEventFunction(na.site.initializeApps, { dat : dat })] },
                    { resizeApps : [na.m.newEventFunction(function() {
                        na.m.waitForCondition ('loadContent_displayContent : na.m.HTMLidle() && !na.site.settings.loadingApps?', function () {
                            return
                                na.m.HTMLidle()
                                && !na.site.settings.loadingApps;
                        }, function () {
                            debugger;
                            $('#siteContent > .vividDialogContent').css({
                                display : 'block',
                                position : 'relative'
                            });
                            na.site.resizeApps();
                            na.site.settings.running_loadContent = false;
                        }, 100);
                    }, { dat : dat })] },
                    //{ getPageSpecificSettings : [na.m.newEventFunction (na.site.getPageSpecificSettings)] },
                    { loadTheme : [na.m.newEventFunction (function() {
                        na.m.waitForCondition ('loadContent_displayContent : na.m.HTMLidle() && !na.site.settings.running_loadContent?', function () {
                            return
                                na.m.HTMLidle()
                                && !na.site.settings.running_loadContent;
                        }, function () {
                            na.site.loadTheme (null, null, true, true);
                        }, 100);
                    })] },
                    { reloadMenu : [na.m.newEventFunction(na.site.reloadMenu)] },
                    { loadTheme_cleanup : [na.m.newEventFunction (function() {
                        na.m.waitForCondition ('loadContent_displayContent : na.m.HTMLidle() && !na.site.settings.running_loadTheme?', function () {
                            return na.m.HTMLidle() && !na.site.settings.running_loadTheme
                        }, function () {
                            na.site.globals.themes[na.site.globals.themeName].themeSettings.Apps = {};
                            na.te.onload(); // results in excess /view/logs data
                            na.site.globals.themes.default = na.site.loadTheme_fetchDialogs();
                        }, 100);
                    })] },
                    { initializeVivids : [na.m.newEventFunction(function(){
                        na.m.waitForCondition ('na.site.initializeVivids() : na.m.HTMLidle()?', function () { return na.m.HTMLidle() && !na.site.settings.running_loadContent}, na.site.startUIvisuals, 100);
                    })] },
                    { renderAllCustomHeadingsAndLinks : [na.m.newEventFunction(function(){
                        na.m.waitForCondition ('na.site.renderAllCustomHeadingsAndLinks() : na.m.HTMLidle()?', function () { return na.m.HTMLidle() && !na.site.settings.running_loadContent}, na.site.renderAllCustomHeadingsAndLinks, 100);
                    })] }
                ]
            }
        }));
    },

    startUIvisuals : function (divID) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
        if (typeof startLogo=='function') startLogo('neCompanyLogo', 'countryOfOriginColors');


        $('.vividDialog'/*, vdc[0]*/).each(function(idx,el){
            if (!na.site.settings.dialogs['#'+el.id]) na.site.settings.dialogs['#'+el.id] = new vividUserInterface_2D_dialog(el);
        });
        $('#siteContent > .vividDialogContent').css({scale:1});


        $('.vividButton4, .vividButton, .vividButton_icon_50x50_siteTop, .vividButton_icon_50x50').each(function(idx,el){
            if (el.id=='btnShowStartMenu') debugger;
            if (!na.site.settings.buttons['#'+el.id]) na.site.settings.buttons['#'+el.id] = new vividUserInterface_2D_button(el);
        });

        if ( !$('#btnShowStartMenu')[0].naInitializedAlreadyHere ) {
            $('#btnShowStartMenu').mouseenter (function(evt) { // in honor of the coding language 'Python', a language like Ruby, which I'll one day use for the installation scripts of NicerAppWebOS.
                var evt2 = $.extend( {}, evt);
                evt2.currentTarget = $('#siteMenu__0')[0];
                na.site.components.menus['#siteMenu'].currentEl = evt2.currentTarget;
                na.site.components.menus['#siteMenu'].onmouseover (evt2);
            });
        }


        $('.vividMenu'/*, vdc[0]*/).each(function(idx,el){
            //if (el.id!=='siteMenu') {
                if (!na.site.settings.menus) na.site.settings.menus = {};
                if (!el.id=='siteMenu')
                    if (!na.site.settings.menus['#'+el.id]) na.site.settings.menus['#'+el.id] = new naVividMenu(el)
            //}
        });


        /* i have no idea anymore what this is supposed to do! ;)
        var sel = document.querySelectorAll('.contentSectionTitle3_a');
        if (sel) for (let i = 0; i < sel.length; i++) { var sel2 = sel[i]; sel2.addEventListener('click',na.m.handleGalleryLinkClick); }
        */


        /*
        $('p, h1, h2, h3').addClass('todoList');
        */

        na.site.bindTodoListAnimations (
            '.todoList, '
            +'.contentSectionTitle3, contentSectionTitle3_a, '
            +'p.todoList, h1.todoList, h2.todoList, h3.todoList, '
            +'li > a, '
            +'.todoList > li, '
            +'.todoList > li > div, '
            +'.todoList > li > pre, '
            +'.todoList_l1 > li, '
            +'.todoList_l1 > li > div, '
            +'.todoList_l1 > li > pre, '
            +'.todoList_l2 > li, '
            +'.todoList_l2 > li > div, '
            +'.todoList_l2 > li > pre '
        );
    },

    bindTodoListAnimations : function (selector) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
        $(selector).each(function(idx,el) {
            $(el).bind('mouseover', function(evt) {
                $(evt.currentTarget).removeClass('in-active').addClass('active');
            });
            $(el).bind('mouseout', function(evt) {
                $(evt.currentTarget).removeClass('active').addClass('in-active');
                var f1 = function (evt2) {
                    $(evt2.currentTarget).removeClass('in-active');
                    evt2.currentTarget.removeEventListener('animationend', f1);
                };
                evt.currentTarget.addEventListener('animationend', f1);
            });
        });

    },

    initializeScriptsForApps : function (ec, eventIdx, eventParams, f) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
        // na.site.loadContent()::stage 004 : put all the SCRIPT tags with a src= attribute into the HEAD of the document, IF they're not there already, and let them load properly.
        var
        fncn = 'na.site.initializeScriptsForApps(ec,eventIdx,eventParams)',
        about = {
            activity :
                na.m.log (20,
                    'put all the SCRIPT tags with a src= attribute into the HEAD of the document, '
                    +'IF they\'re not there already, and let them load properly.',
                    false
                )
        },
        vd = na.desktop.settings.visibleDivs,
        c = na.site.settings.current,
        eventData = ec.events[eventIdx],
        i = 0,
        dat = eventParams.dat;

        c.loadingApps = true;
        c.startingScripts = false;
        c.startingApps = true;
        c.divsInitializing = [];

        eventData.fncn = fncn;
        eventData.about = about;

        //var f = this;

        for (let divID in dat) {
            c.divsInitializing.push({divID:divID});
        }


        c.scriptsToLoadTotal = 0;
        c.scriptsLoaded = false;
        c.scriptsToLoad = 0;
        debugger;
        for (let divID in dat) {
            i++;
            if (divID==='head') {
                $('#jsPageSpecific, #cssPageSpecific').remove();
                $('head').append(dat[divID]);
            } else if (divID==='extraElements') {
                $('#extraElements').html(dat[divID]);
            } else {
                var scripts = dat[divID].match(/<script.*?src="\/NicerAppWebOS\/.*?\.js?.*?"/g);
                if (scripts) {
                    c.scriptsToLoadTotal += scripts.length;
                    for (var i=0; i<scripts.length; i++) {
                        var src = scripts[i].replace(/"/g, '');
                        c.scriptsToLoadTotal -= $('head script[src="'+src+'"]').length;
                    }
                };

                // did we perhaps not need to load any scripts at all for this set of DIVs that are now initializing for this page change?
                //      if so, then go straight to [1], which is quite necessary as part of the app startup routine.
                if (c.scriptsToLoadTotal===0)
                    c.scriptsLoaded = true;


                if (!na.d.s.visibleDivs.includes('#'+divID)) {
                    na.d.s.visibleDivs.push('#'+divID);
                    $.cookie('visible_'+divID, true);
                };

                $('#'+divID+' .vividDialogContent').fadeOut('normal', function () {
                    var $el = $(this).parents('.vividDialog');
                    if (!$el) debugger;
                    var divID2 = $el[0].id;
                    if (!divID2 || divID2==='') debugger;

                    var vdc = $('#'+divID2+' .vividDialogContent');
                    if (dat[divID2]) {
                        vdc.html(dat[divID2]).fadeIn('normal');
                        if (na.site.settings.url.match('/wiki/')) {
                            $('#siteContent > .vividDialogContent > div').css({background:'none'});
                            $('#bodyContent div').css({background:'none'});
                            $('#bodyContent li').css({color:'yellow'});
                        };
                        na.m.log (22,fncn+' : "'+divID2+'" filled with HTML.', false);
                        na.site.transformLinks($('#'+divID2)[0]);
                        na.site.renderAllCustomHeadingsAndLinks();

                        var
                        scripts = dat[divID2].match(/\/NicerAppWebOS\/.*\.js.*"/g),
                        //scripts = dat[divID2].match(/\/NicerAppWebOS\/.*\.js?.*"/g), doesnt work
                        scriptIdx = 0;

                        console.log (divID2, scripts);
                        debugger;
                        if (scripts) {
                            while (scriptIdx < scripts.length) {
                                var src = scripts[scriptIdx].replace(/"/g,'');
                                if ($('head script[src="'+src+'"]').length===0) {
                                    var script = document.createElement('script');
                                    script.onload = function () {
                                        var c = na.site.settings.current;
                                        c.scriptsLoaded++;
                                        debugger;
                                        if (c.scriptsLoaded === c.scriptsToLoadTotal) {
                                            c.scriptsLoaded = true;
                                            c.startingApps = false;
                                            f.completed = true;
                                            f.runningNow = false;
                                        }

                                    };
                                    script.src = src;
                                    scriptIdx++;
                                    $('head')[0].appendChild(script);
                                } else scriptIdx++;
                            };
                        } else {
                            debugger;
                            f.completed = true;
                            f.fnc.completed = true;
                            c.scriptsLoaded = true;
                            c.startingApps = false;
                        }
                    }

                });

            };
        };

        return false;
    },

    initializeApps : function (ec, eventIdx, eventParams, f, callback) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
    debugger;
        if (ec) {
            var
            fncn = 'na.site.loadContent():::5::na.site.initializeApps()',
            about = { activity : na.m.log (20, 'call all na.apps.loaded[appID].settings.loadedIn[divID].onload() handlers for all {divID in eventParams.dat}', false) },
            c = na.site.settings.current,
            eventData = ec.events[eventIdx],
            dat = eventParams.dat;

            eventData.fncn = fncn;
            eventData.about = about;
        } else {
            var
            fncn = 'na.site.initializeApps()';
        }

        //na.m.log (6, 'na.site.initializeApps() : stacktrace='+na.m.stacktrace());

        var c = na.site.settings.current;
        if (!c.divsInitializing) c.divsInitializing = [];

        // DON'T : messes up first page loads for /world-news and other pages!
        //c.startingScripts = false;
        //c.startingApps = true;

        na.m.waitForCondition (fncn+' : are the apps loaded, and their scripts fully loaded into the page\'s <HEAD>? na.m.HTMLidle()?', function () {
            var r = na.m.HTMLidle();//na.m.WebOSidle===too restrictive,
               // debugger;
            //if (!na.site.settings.current.startingApps) debugger;
            return r;
        }, function () { //[1]
                var c = na.site.settings.current;

                if (dat) for (var divID in dat) {
                    if (divID!=='head')
                    for (var appID in na.apps.loaded) {
                        var app = na.apps.loaded[appID];
                        var handlers = app.settings.loadedIn['#'+divID];
                        if (handlers) {
                            if (typeof handlers.onload == 'function') {
                                c.divsInitializing.push ({appID:appID,divID:divID});
                                na.m.log (50, fncn+' : #'+divID+' : Now calling na.apps.loaded["'+appID+'"].settings.loadedIn["#'+divID+'"].onload();');
                                //setTimeout(function(){
                                    handlers.onload ({
                                        callbackParams : [ divID ],
                                        callback : function (divID) {
                                            na.site.appDivLoaded (appID, divID, f, callback);
                                        }
                                    });
                                //}, 2500);
                            }
                        } else {
                            na.site.appDivLoaded(appID, divID, f, callback);
                        }
                    }
                } else {
                    for (var appID in na.apps.loaded) {
                        var app = na.apps.loaded[appID];
                        for (var divID in app.settings.loadedIn) {
                            divID = divID.replace('#','');
                            var handlers = app.settings.loadedIn['#'+divID];
                            if (handlers) {
                                if (typeof handlers.onload == 'function') {
                                    c.divsInitializing.push({divID:divID});
                                    na.m.log (50, fncn+' : #'+divID+' : Now calling na.apps.loaded["'+appID+'"].settings.loadedIn["#'+divID+'"].onload();');
                                    handlers.onload ({
                                        callbackParams : [ divID ],
                                        callback : function (divID) {
                                            na.site.appDivLoaded (appID, divID, f, callback);
                                        }
                                    });
                                }
                            } else {
                                na.site.appDivLoaded(appID, divID, f, callback);
                            }
                        }
                    }
                };

                if (c.divsInitializing.length === 0) {
                    c.startingApps = false;
                    c.loadingApps = false;
                }
            },
        100);
        return false;
    },

    appDivLoaded : function (appID, divID, f, cb) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
    debugger;
        var c = na.site.settings.current;
        for (var i=0; i < c.divsInitializing.length; i++) {
            var it = c.divsInitializing[i];
            if (it.divID===divID || it.divID=='head') {
                it.loaded = true;
            }
        };

        var allLoaded = true;
        for (var i=0; i < c.divsInitializing.length; i++) {
            var it = c.divsInitializing[i];
            if (!it.loaded) {
                allLoaded = false;
                break;
            }
        };

        if (allLoaded) {
            c.loadingApps = false;
            if (f) f.completed = true;
            if (typeof cb=='function') cb();
        }
    },

    resizeApps : function (ec, eventIdx, eventParams, f) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
    debugger;
        var fncn = 'na.site.resizeApps()';
        if (typeof ec=='object') {
            var
            fncn = 'na.site.loadContent():::6::na.site.resizeApps()',
            about = { activity : na.m.log (20, 'call all na.apps.loaded[appID].settings.loadedIn[divID].onresize() handlers for all {divID in eventParams.dat}', false) },
            c = na.site.settings.current,
            eventData = ec.events[eventIdx],
            dat = eventParams.dat,
            cb = function() { if (typeof appID=='string') na.site.appResized(appID, f); };

            eventData.fncn = fncn;
            eventData.about = about;

        } else if (typeof ec=='function') {
            var
            cb = ec;
            //debugger;
        }

        na.m.waitForCondition (fncn+' : na.m.HTMLidle() && !na.site.settings.current.loadingApps?', function() {
            var r =
                na.m.HTMLidle()
                //&& !na.site.settings.current.startingApps // DON'T! messes up initial-page loads.
                && !na.site.settings.current.loadingApps;

            if (r)
            for (var appID in na.apps.loaded) {
                var app = na.apps.loaded[appID];
                if (
                    app.settings
                    && app.settings.current
                    && typeof app.settings.current.loaded == 'boolean'
                    && !app.settings.current.loaded
                ) r = false;
            };
            return r;
        }, function () {
            na.site.settings.current.numAppsResizing = 0;
            na.site.settings.current.numAppsResized = 0;
            na.site.settings.current.appsResizing = {};

            var called = 0;
            for (var appID in na.apps.loaded) {
                var appSettings = na.apps.loaded[appID];
                if (typeof appSettings.onresize=='function') {
                    na.site.settings.current.numAppsResizing++;
                    na.site.settings.current.appsResizing[appID] = true;
                    appSettings.onresize ({
                        callbackParams : [ appID, f ],
                        callback : cb
                    });
                    called++;
                }
            }

            //debugger;
            if (called === 0 && ec && !ec.called) {
                ec.called = true;
                cb();
            }

            debugger;
            if (f) {
                f.runningNow = false;
                f.completed = true;
                setTimeout(function() {
                    $('.vividDialog').css({overflow:'visible'});
                }, 1000);

            }
        }, 250);
    },

    appResized : function (appID, f) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
    debugger;
        var c = na.site.settings.current;
        c.numAppsResized++;
        c.appsResizing[appID] = false;
        if (c.numAppsResized === c.numAppsResizing) {
            c.numAppsResizing = 0;
            c.numAppsResized = 0;
            c.appsResizing = {};
            c.loadingApps = false;
            c.startingApps = false;
            if (f) {
                f.runningNow = false;
                f.completed = true;
            }
        }
    },

    getPageSpecificSettings : function (ec, eventIdx, eventParams, f) {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
        if (
            !ec
            || !ec.events
            || !ec.events[1]
            || !ec.events[eventIdx]
            || !ec.events[1].loadContent_getContent
            || !ec.events[1].loadContent_getContent.params
            || !ec.events[1].loadContent_getContent.params.urlTransformedB
        ) debugger;

        var
        fncn = 'na.site.loadContent():::4::na.site.getPageSpecificSettings()',
        about = { activity : na.m.log(20, 'load the CSS3 theme for this page for vividDialogs and other more global theme settings.', false) },
        c = na.site.settings.current,
        eventData = ec.events[eventIdx],
        url2 = ec.events[1].loadContent_getContent.params.urlTransformedB,
        debugThemeLoading = false;

        eventData.fncn = fncn;
        eventData.about = about;

        dat = eventParams.dat,
        url3 = '/NicerAppWebOS/logic.AJAX/ajax_get_pageSpecificSettings.php',
        getData = (
            url2.match(/\/view\//)
            ? { apps : url2 }
            : { viewID : '/'+url2 }
        ),
        ac2 = {
            type : 'GET',
            url : url3,
            data : getData,
            success : function (data, ts, xhr) {
                if (debugThemeLoading) debugger;
                $('#cssPageSpecific, #jsPageSpecific').remove();
                $('head').append(data);


                setTimeout(function() {
                    //var evt = { currentTarget : $('#specificity')[0] };
                    //if (na.site.globals.themesDBkeys) na.te.specificitySelected(evt);

                    if (debugThemeLoading) debugger;
                    if (na.site.settings.current.postLoginSaveTheme) {
                        na.site.globals.backgroundSearchKey = $.cookie('siteBackground_search');
                        na.site.globals.background = $.cookie('siteBackground_url');
                        na.site.saveTheme();
                        delete na.site.settings.current.postLoginSaveTheme;

                    } else /*na.site.loadTheme(function() */{
                        if (debugThemeLoading) debugger;

                        $('.vividDialog'/*, vdc[0]*/).each(function(idx,el){
                            if (!na.site.settings.dialogs['#'+el.id]) na.site.settings.dialogs['#'+el.id] = new naVividDialog(el);
                        });

                        // seems total nonsense :
                        //var btn = $('#'+na.te.settings.current.selectedButtonID)[0];
                        //na.te.onclick(btn, false);

                        /*
                        if (
                            typeof $.cookie('cdb_loginName')=='string'
                            && $.cookie('cdb_loginName')=='Guest'
                        ) {
                            na.site.globals.backgroundSearchKey = $.cookie('siteBackground_search');
                            na.site.globals.background = $.cookie('siteBackground_url');
                        };
                        na.backgrounds.next (
                            '#siteBackground',
                            na.site.globals.backgroundSearchKey,
                            na.site.globals.background,
                            false
                        );
                        */

                        /*if (typeof na.site.settings.current.loadContent_callback_phase1=='function')
                            na.site.settings.current.loadContent_callback_phase1 (themeData, data);*/
                    };//);
                }, 50); // na.site.setSpecificity() needs to run first, which is called from $('head').append(data).
            },
            error : function (xhr, textStatus, errorThrown) {
                na.site.ajaxFail(fncn, url3, xhr, textStatus, errorThrown);
            }
        };
        //setTimeout (function() {
            $.ajax(ac2);
        //}, 50);
    },

    renderAllCustomHeadingsAndLinks : function () {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */

        return false;

        // LEGACY JS-ONLY COLOR GRADIENT HORIZONTAL ANIMATIONS (PRE-CSS3) FOLLOWS:
        /*
        if (!na.site.globals.useVividTexts) return false;
        if (jQuery('#pageTitle')[0]) {
            if (!$('#pageTitle')[0].el) {
                $('#pageTitle')[0].vividTextCmd = {
                        el : $('#pageTitle')[0],
                        theme : na.cg.themes.naColorgradientScheme_OrangeYellow,//naColorgradientScheme_GreenWhiteBlue_classics,
                        animationType : na.vividText.globals.animationTypes[0],
                        animationSpeed : 4 * 1000
                };
                na.vividText.initElement ($('#pageTitle')[0].vividTextCmd);
            }
        };
        if ($('.contentSectionTitle1')[0]) {
            $('.contentSectionTitle1').each (function(idx,el) {
                //setTimeout (function() {
                    el.vividTextCmd = {
                            el : el,
                            theme : na.cg.themes.naColorgradientScheme_OrangeYellow,
                            animationType : na.vividText.globals.animationTypes[0],
                            animationSpeed : 4 * 1000
                    };
                    na.vividText.initElement (el.vividTextCmd);
                //}, 20 * (idx + 1) );
            });
        };
        if ($('.contentSectionTitle2')[0]) {
            $('.contentSectionTitle2').each (function(idx,el) {
                //setTimeout (function() {
                    el.vividTextCmd = {
                            el : el,
                            theme : na.cg.themes.naColorgradientSchemeMagicalBlue,
                            animationType : na.vividText.globals.animationTypes[0],
                            animationSpeed : 4 * 1000
                    };
                    na.vividText.initElement (el.vividTextCmd);
                //}, 20 * (idx + 1) );
            });
        };
        if ($('.contentSectionTitle3')[0]) {
            $('.contentSectionTitle3').each (function(idx,el) {
                //setTimeout (function() {
                    el.vividTextCmd = {
                            el : el,
                            theme : na.cg.themes.naColorgradientSchemeGreenVividText2,//naColorgradientSchemeGreenVividText,
                            animationType : na.vividText.globals.animationTypes[0],
                            animationSpeed : 4 * 1000
                    };
                    if ($(el).parent().is('span')) $(el).css({padding:0,margin:0});
                    na.vividText.initElement (el.vividTextCmd);
                //}, 20 * idx);
            });
        };
        setTimeout (function() {
            var noGo = $('ul > li > a, div > center > a, .newsApp__item__outer a');
            if ($('a').not(noGo)[0]) {
                $('a').not(noGo).each (function(idx,el) {
                    //setTimeout (function() {
                        if (!el.vividTextCmd) {
                            el.vividTextCmd = {
                                    el : el,
                                    theme : na.cg.themes.naColorgradientSchemeGreenVividText2,//naColorgradientSchemeGreenVividText,
                                    animationType : na.vividText.globals.animationTypes[0],
                                    animationSpeed : 4 * 1000
                            };
                            if ($(el).parent().is('span')) $(el).css({padding:0,margin:0});
                            na.vividText.initElement (el.vividTextCmd);
                        }
                    //}, 20 * idx);
                });
            };
        }, 500);
        */
    },

    closeAll_2D_apps : function() {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */

    },
    closeAll_3D_apps : function() {
    /*
     * LICENSE : https://opensource.org/license/mit
     * (C) +-2020AD to 2025AD (possibly later, see https://nicer.app/NicerAppWebOS/version.json or https://github.com/NicerEnterprises/NicerApp-WebOS/blob/main/NicerAppWebOS/version.json)
     * (C) 2025 "Rene A.J.M. Veerman" <rene.veerman.netherlands@gmail.com>
     */
        for (var elID in na.site.settings.na3D) {
            var el = na.site.settings.na3D[elID];
            if (el.settings.loadedIn) {
                for (var divID in el.settings.loadedIn) {
                    var div = el.settings.loadedIn[divID];
                    if (typeof div.ondestroy=='function') div.ondestroy();
                }
            }
        }
    },
    // END na.site.loadContent()


    onresize : function(settings) {
        $('#siteBackground, #siteBackground iframe, #siteBackground img, #siteBackground div').css({
            width : $(window).width(),
            height : $(window).height()
        });
        //$('#siteBackground img.bg_first').fadeIn(2000);

        // fix attempts (all failed) for [apple bug 1] orientation change bug on iphone 6
        $('body')[0].scrollLeft = 0;//	$('body')[0].style.position = 'relative';
        $('body')[0].scrollTop = 0;//	$('body')[0].style.position = 'relative';

        $('html')[0].scrollLeft = 0;
        $('html')[0].scrollTop = 0;
        $('html')[0].style.display = 'none';
        $('html')[0].style.display = 'block';

        if (typeof settings=='object' && settings.possiblyChangeBackground) {
            var oldBSK = na.site.globals.backgroundSearchKey;
            if (oldBSK==='' || oldBSK=='landscape' || oldBSK=='portrait') {
                if ( parseFloat($(window).width()) > parseFloat($(window).height()) )
                    na.site.globals.backgroundSearchKey = 'landscape';
                else
                    na.site.globals.backgroundSearchKey = 'portrait';
            }
            if (oldBSK !== '' && oldBSK != na.site.globals.backgroundSearchKey)
                na.backgrounds.next (
                    '#siteBackground',
                    na.site.globals.backgroundSearchKey,
                    null,
                    false
                );
        };

        if (
            na.site.settings.app
            && na.apps.loaded[na.site.settings.app]
            && typeof na.apps.loaded[na.site.settings.app].preResize == 'function'
        ) na.apps.loaded[na.site.settings.app].preResize ( {} );

        na.desktop.resize(
            function (div, calculationResults, sectionIdx, section, divOrderIdx) {
                if (!settings) settings = {};
                if (!settings.finalized) {
                    settings.finalized = true;

                    na.site.settings.siteInitialized = true;

                    na.site.reloadMenu();

                    na.site.onresize_doContent(settings);



                    if (typeof settings=='object' && typeof settings.callback=='function') {

                        var cb2 = function (settings) {
                            settings.callback = settings.callback_naSiteOnresize;
                            delete settings.callback_naSiteOnresize;
                            if (
                                (typeof settings=='object' && settings.reloadMenu===true)
                            ) na.site.reloadMenu(settings);
                            else if (typeof settings=='object' && typeof settings.callback=='function') settings.callback();
                        }

                        var cb = settings.callback;
                        settings.callback_naSiteOnresize = cb;
                        settings.callback = function() {
                            na.site.settings.numAppsResizing = 0;
                            na.site.settings.numAppsResized = 0;
                            na.site.settings.appsResizing = {};
                            cb2(settings);
                        };
                    } else
                        settings.callback = function() {
                            na.site.settings.numAppsResizing = 0;
                            na.site.settings.numAppsResized = 0;
                            na.site.settings.appsResizing = {};
                            //cb2(settings);
                        };

                    na.site.resizeApps(settings.callback);
                }
            }
        );
    },


    updateSiteDatetime : function () {
        var
        d = new Date(),
        r =
        d.getFullYear() + '-' + na.m.padNumber((d.getMonth()+1),2,'0') + '-' + na.m.padNumber(d.getDate(), 2, '0')
        + '(' + Date.locale.en.day_names_short[d.getDay()] + ')'
        + ' ' + na.m.padNumber(d.getHours(), 2, '0') + ':' + na.m.padNumber(d.getMinutes(), 2, '0')
        + ':' + na.m.padNumber(d.getSeconds(), 2, '0'), // + '+' + na.m.padNumber(d.getMilliseconds(), 3, 0);
        html =
            '<div class="datetime time animatedText-orangeYellow">'+na.m.padNumber(d.getHours(), 2, '0')
            + ':' + na.m.padNumber(d.getMinutes(), 2, '0')
            + ':' + na.m.padNumber(d.getSeconds(), 2, '0')+'</div>'
            + '<div class="datetime date animatedText-blue">'
            + d.getFullYear()
            + '-' + na.m.padNumber((d.getMonth()+1),2,'0')
            + '-' + na.m.padNumber(d.getDate(), 2, '0')
            + '(' + Date.locale.en.day_names_short[d.getDay()] + ')'
            +'</div>';
        $('#siteDatetime').html(html);
    },

    reloadMenu : function (settings) {
        // only drastically slows things down
        //na.desktop.resize(null, false);
        //na.onresize ({ reloadMenu:false });


        var t = this;


        //na.m.waitForCondition ('na.reloadMenu() : na.m.HTMLidle() && !na.site.components.startingApps?', function() {
        na.m.waitForCondition ('na.reloadMenu() : na.m.HTMLidle()?', function() {
            var r =
                na.m.HTMLidle();
                //&& !na.site.components.startingApps;
            return r;
        }, function() {
            var
            callback3x = (settings ? settings.callback : null),
            callback2b = function () {
                na.m.log (210, '<UL> & <LI> DATA LOADED FOR #siteMenu', false);
                na.m.log (210, 'STARTING TO RE-INITIALIZE #siteMenu', false);

                setTimeout (function() {
                    $('#siteMenu').css({zIndex:800*1000});
                    na.site.components.menus['#siteMenu'] = new naVividMenu($('#siteMenu')[0], function(menu) {
                        $('#siteMenu').css ({
                            top : $(window).height()+100,
                            left : 10,
                        });
                        $('#siteMenu__0').css ({
                            opacity : 0.00001,
                            zIndex : -1,
                            bottom : -100
                        });

                        na.m.log (210, 'DONE RE-INITIALIZING #siteMenu', false);
                        var topLevelItemCount = $('.vividMenu_mainUL > li', menu).length;
                        //debugger;

                        if (settings) settings.naVividMenu_menuInitialized = menu;
                        if (typeof callback3x=='function') callback3x (settings);
                    });
                }, 50);
            };

            na.site.reloadMenu_reOrganise (callback2b);
        }, 50);
    },

    reloadMenu_reOrganise : function (callback4a) {

        if (!$('#siteMenu_vbChecker')[0]) $('#siteMenu').append('<div id="siteMenu_vbChecker" class="vividButton vividButton_text vividMenu_item" theme="'+$('#siteMenu').attr('theme')+'" style="opacity:0.0001;position:absolute;">abc XYZ</div>');

        var
        fncn = 'na.reloadMenu_forTheFirstTime(callback)',
        menuItemWidth = $('#siteMenu_vbChecker').outerWidth(),
        numRootItems = $('#siteMenu').width() / menuItemWidth,
        nri = Math.floor(numRootItems) > 2 ? Math.floor(numRootItems) : 1,
        mlp = '<li class="contentMenu"><a class="contentMenu" href="-contentMenu-">-contentMenu-</a></li>',
        contentMenu = $('#app_mainmenu li')[0] ? '<li class="contentMenu_populated">'+$('#app_mainmenu li')[0].innerHTML+'</li>' : '';

        var
        widest = { rootItems : 0, layout : null },
        hit = { rootItems : 0, layout : null };

        $('.vividMenu_layout').each (function(idx,layout) {
            var
            iw = parseInt($(layout).attr('itemsLevel1'));

            if (iw > widest.rootItems) widest = { rootItems : iw, layout : layout };
            if (iw === nri) hit = { rootItems : iw, layout : layout };
        });
        if (!hit.layout) hit = widest;

        var
        menu = $('#siteMenu'),
        items = $('.vividMenu_mainUL', menu),
        segs = $('.vividMenu_segments', menu);
        $('.vividMenu_item', menu).remove();

        items.html(hit.layout.innerHTML);
        $('.subMenu, .vividMenu_subMenuPanel', items).each(function (idx, subMenu) {
            var
            smID = '#subMenu__'+$(subMenu).attr('subMenuID');
            //smID = '.subMenu[submenuid="'+$(subMenu).attr('subMenuID')+'"]'; // only to be used when experiencing DNS problems
            items.html (
                items[0].innerHTML.replace( subMenu.outerHTML, $(smID)[0].outerHTML )
            );
        });

        var
        menu = items[0].innerHTML,
        p1 = menu.indexOf(mlp),
        mt = menu.substr(0,p1) + contentMenu + menu.substr(p1+mlp.length);

        items[0].innerHTML = mt;
        var il1 = parseInt($('#siteMenu ul').attr('itemslevel1'));
        //if (mt.indexOf('-contentMenu-')===-1) $('#siteMenu ul').attr('itemslevel1', ''+(il1-1));
        //debugger;

        na.site.transformLinks ($('#siteMenu_items')[0]);
        if (typeof callback4a=='function') callback4a ( menu );
    },

    transformLinks : function (rootElement) {
        //if (!na.site.globals.useLoadContent) return false;
        $('a', rootElement).not('.contentMenu, .noPushState, .hmNavE').each(function(idx, el){

            let x = el.href, y = el.target;

            if (
                el.href.match(document.location.origin)
                && !el.href.match(document.location.origin+'\/#')
            ) {
                let h = "javascript:na.site.loadContent(event,'"+el.href.replace(document.location.origin,'').replace('/view/','')+"');";
                //el.href = '#';
                $(el).attr('onclick', h);
                $(el).attr('targetDisabled',$(el).attr('target'));
                $(el).attr('target','');

            }
        });
    },

    startTooltips : function (evt, rootEl) {
        if (!rootEl) rootEl = document;
        $('.tooltip', rootEl).each (function(idx,el) {
            var theme = $(el).attr('tooltipTheme');
            if (!theme) theme = 'mainTooltipTheme';
            /*if (el.id=='btnLoginLogout' && parseInt($.cookie('haveShownTutorial'))<3) {
                na.site.components.btnLoginLogout = this;
                var ptSettings = {
                    theme : theme,
                    contentAsHTML : true,
                    content : $(el).attr('title'),
                    animation : 'grow',
                    alignTo : 'target',
                    alignX : 'inner-left',
                    offsetX : 10,
                    offsetY : 10,
                    fade : !na.m.userDevice.isPhone,
                    slide : !na.m.userDevice.isPhone,
                    slideOffset : 25
                };
                if (na.m.userDevice.isPhone) ptSettings.showOn = 'none';
                if (ptSettings.content!=='') {
                    $(el).tooltipster(ptSettings);
                    $(el).tooltipster('show');
                    $(el).tooltipster('hide');
                    $(el).addClass('started');
                    setTimeout (function() {
                        $(na.site.components.btnLoginLogout).tooltipster('show');
                        setTimeout(function() {
                            $(na.site.components.btnLoginLogout).tooltipster('hide');
                        }, 2000);
                    }, 500);
                }

            } else */

            if (el.id=='btnChangeBackground' /*&& parseInt($.cookie('haveShownTutorial'))<3*/) {
                na.site.components.btnChangeBackground = el;
                try {
                    var html = $($(el).attr('title'));
                } catch (error) {
                    var html = $(el).attr('title');
                }
                debugger;
                var
                ptSettings = {
                    theme : theme,
                    contentAsHTML : true,
                    content : html,
                    animation : 'grow',
                    alignTo : 'target',
                    alignX : 'inner-right',
                    offsetX : -20,
                    offsetY : 10,
                    fade : !na.m.userDevice.isPhone,
                    slide : !na.m.userDevice.isPhone,
                    slideOffset : 25
                };
                if (na.m.userDevice.isPhone) ptSettings.showOn = 'none';
                if (ptSettings.content!=='') {
                    $(el).tooltipster(ptSettings);
                    setTimeout (function() {
                        $(el).tooltipster('show');
                        $('.mainTooltipTheme').css ({opacity:0.001});
                        setTimeout (function() {
                            $(el).tooltipster('hide');
                        }, 200);
                    }, 600);
                    $(el).addClass('started');
                    setTimeout (function() {
                        $(na.site.components.btnChangeBackground).tooltipster('show');
                        setTimeout(function() {
                            $(na.site.components.btnChangeBackground).tooltipster('hide');
                        }, 2000);
                        if (na.m.userDevice.isPhone) $('.mainTooltipTheme').css({left:$('.mainTooltipTheme').offset().left-20});
                        $('.tip-arrow').css({left:$(el).offset().left-$('.mainTooltipTheme').offset().left});
                    }, 1000);
                };
            } else /*if (
                el.id!=='btnChangeBackground'
                && el.id!=='btnLoginLogout'
            ) */{
                try {
                    var html = $(el).attr('title');
                } catch (error) {
                    var html = $(el).attr('title');
                }
                var
                ptSettings = {
                    theme : theme,
                    contentAsHTML : true,
                    content : html
                };
                if (na.m.userDevice.isPhone) ptSettings.showOn = 'none';
                if (ptSettings.content!=='') $(el).tooltipster(ptSettings);
            }
            //console.log ('startTooltips : el.id=='+el.id+', cookie::haveShownTutorial='+$.cookie('haveShownTutorial'));
            $(el).attr('title','');
        });
        $.cookie('haveShownTutorial', parseInt($.cookie('haveShownTutorial'))+1, na.m.cookieOptions());
    },

    setSpecificity : function (simple) {
        $('.na_themes_dropdown').html('<div class="vividDropDownBox_selected vividScrollpane" style="white-space:normal;"></div><div class="vividDropDownBox_selector"><div class="vividScrollpane" style="padding:0px;"></div></div>').delay(50);
        $('.vividDropDownBox_selected, .vividDropDownBox_selector').each(function(idx,el) {
            var w = 0;
            $('.vividButton4, .vividButton, .vividButton_icon_50x50', $(el).parent().parent() ).each(function(idx2, el2) {
                w += $(el2).width();
                $(el2).css ({display : 'inline-block', position:'relative'});
            });
            var w3 = $(this).parent().parent().width();
            var w2 = w3
                    - $('.siteToolbarThemeEditor__label__specificity, .siteToolbarThemeEditor__label__themes, .btnOptions_menu__label__specificity_dropdown, .btnOptions_menu__label__themes_dropdown',
                        $(this).parent().parent()
                    ).width()
                    - w
                    - 20;

            $(this).css({
                width: w2,
                height : 'auto'
            });

        });
        for (var i in na.site.globals.themesDBkeys) {
            if (
                na.site.globals.themesDBkeys[i].display===false
                //|| !na.site.globals.themesDBkeys[i].has_write_permission // TOTAL NONSENSE FOR INITIALIZING SITES WITH NO CUSTOM THEME SET YET (SO RIGHT AFTER A FIRST INSTALLATION OF NICERAPP)
            ) continue;
            var l = i;
        }
        for (var j in na.site.globals.themesDBkeys) {
            var i = parseInt(j);
            if (
                na.site.globals.themesDBkeys[i].display===false
                //|| !na.site.globals.themesDBkeys[i].has_write_permission // TOTAL NONSENSE FOR INITIALIZING SITES WITH NO CUSTOM THEME SET YET (SO RIGHT AFTER A FIRST INSTALLATION OF NICERAPP)
            ) continue;

            var
            divEl = document.createElement('div');
            //l = Object.keys(na.site.globals.themesDBkeys).length - 1;

            $(divEl)
                .html(na.site.globals.themesDBkeys[i].specificityName)
                .attr('value',i);

            //if (!na.site.globals.themesDBkeys[i].hasWritePermission) $(divEl).addClass('disabled');

            /*
             * TODO : URGENT : Upgrade vividButton4.2 to vividButton4.3
            debugger;
            var
            b = na.site.components.buttons['#btnLockSpecificity'],
            b1 = b.icon_svg.settings.buttons['#btnLockSpecificity'],
            selectMe = (
                simple
                    ? (
                        na.site.globals.themeSpecificityName === na.site.globals.themesDBkeys[i].specificityName
                        || na.site.globals.specificityName === na.site.globals.themesDBkeys[i].specificityName
                    )
                    : b1 && b1.state == b1.btnCode.selectedState
                        ? (
                            na.site.globals.themeSpecificityName === na.site.globals.themesDBkeys[i].specificityName
                            || na.site.globals.specificityName === na.site.globals.themesDBkeys[i].specificityName
                        )
                        : i == l
            );
            */
            var selectMe = (
                na.site.globals.themeSpecificityName === na.site.globals.themesDBkeys[i].specificityName
                || na.site.globals.specificityName === na.site.globals.themesDBkeys[i].specificityName
            );
            if (selectMe) {
                //debugger;
                $(divEl).addClass('selected');
                //$('.na_themes_dropdown__specificity > .vividDropDownBox_selected').html (na.site.globals.specificityName);
                na.site.globals.themeDBkeys = na.site.globals.themesDBkeys[i];
                na.site.loadTheme_applySettings (na.site.globals.themes[na.site.globals.themeName]);
                $('.na_themes_dropdown__specificity > .vividDropDownBox_selected').html (na.site.globals.themeDBkeys.specificityName);
                na.te.settings.current.specificity = na.site.globals.themeDBkeys;
                break;
            };

            //debugger;
            $('.na_themes_dropdown__specificity > .vividDropDownBox_selector > .vividScrollpane').append($(divEl).clone(true,true));
        };

        na.te.settings.selectedThemeName = na.site.globals.themeName;
        for (var themeName in na.site.globals.themes) {
            var theme = na.site.globals.themes[themeName];
            for (var i in na.site.globals.themesDBkeys) {
                var it = na.site.globals.themesDBkeys[i];
                if (
                    it.user === theme.user
                    || it.role === theme.role
                    || it.url === theme.url
                    || it.view === theme.view
                    || it.specificityName === theme.specificityName
                ) {
                    var divEl2 = document.createElement('div');
                    $(divEl2).html(themeName).attr('value',i);

                    if (themeName==na.site.globals.themeName) {
                        $(divEl2).addClass('selected');
                        $('.na_themes_dropdown__themes > .vividDropDownBox_selected').html(themeName);
                    }
                    $('.na_themes_dropdown__themes > .vividDropDownBox_selector > .vividScrollpane').append($(divEl2).clone(true,true));
                    break;
                }
            };
        }
        $('.na_themes_dropdown__specificity').hover(function() {
            clearTimeout(na.site.components.timeout_onmouseover_specificity);
            na.site.components.timeout_onmouseover_specificity = setTimeout(function() {
                $('.na_themes_dropdown__specificity > .vividDropDownBox_selector').fadeIn('normal');
                $('#btnDeleteSpecificity').css({alignSelf:'start'});
            }, 700);
        }, function() {
            clearTimeout(na.site.components.timeout_onmouseover_specificity);
            clearTimeout(na.site.components.timeout_onmouseout_specificity);
            na.site.components.timeout_onmouseout_specificity = setTimeout(function() {
                $('.na_themes_dropdown__specificity > .vividDropDownBox_selector').fadeOut('normal');
                $('#btnDeleteSpecificity').css({display:'block'});
            }, 700);

        });
        $('.na_themes_dropdown__specificity > .vividDropDownBox_selector').mouseover(function() {
            clearTimeout(na.site.components.timeout_onmouseout_specificity);
        });

        $('.na_themes_dropdown__specificity > .vividDropDownBox_selector > .vividScrollpane > div').click(function(evt) {
            na.site.globals.specificityName = $(this).html();
            //debugger;
            $('.na_themes_dropdown__specificity > .vividDropDownBox_selected').html($(this).html());
            $('.na_themes_dropdown__specificity > .vividDropDownBox_selector > .vividScrollpane > div').removeClass('selected');
            $(this).addClass('selected');
            na.te.specificitySelected(evt);
        });

        //$('#siteToolbarThemeEditor .vividScrollpane').not('.vividDropDownBox_selected').css({ overflow : 'visible' });

        //if (!na.m.desktopIdle()) {
            na.te.settings.current.selectedThemeName = na.site.globals.themeName;
            //$('.themeItem').each(function(idx,ti) {
            $('.themeItem').removeClass('onfocus');

/*
                $(ti).removeClass('onfocus');
                if ($(ti).val()==na.te.settings.current.selectedThemeName) {
                    $(ti).addClass('onfocus');
                }
*/

            $('.na_themes_dropdown__themes').hover(function() {
                clearTimeout(na.site.components.timeout_onmouseout_themes);
                $('.na_themes_dropdown__themes > .vividDropDownBox_selector').fadeIn('normal');
            }, function() {
                clearTimeout(na.site.components.timeout_onmouseout_themes);
                na.site.components.timeout_onmouseout_themes = setTimeout (function() {
                    $('.na_themes_dropdown__themes > .vividDropDownBox_selector').fadeOut('normal');
                }, 500);
            });
            $('.na_themes_dropdown__themes > .vividDropDownBox_selector').mouseover(function() {
                clearTimeout(na.site.components.timeout_onmouseout_themes);
            });
            $('.na_themes_dropdown__themes > .vividDropDownBox_selector > .vividScrollpane > div').click(function(evt) {
                $('.na_themes_dropdown__themes > .vividDropDownBox_selected').html($(this).html());
                $('.na_themes_dropdown__themes > .vividDropDownBox_selector > .vividScrollpane > div').removeClass('selected');
                $(this).addClass('selected');
                na.te.themeSelected(evt);
            });





            $('#nb_url1_dropdown').html('<div id="nb_url1_dropdown_selected" class="vividDropDownBox_selected"></div><div id="nb_url1_dropdown_selector" class="vividDropDownBox_selector"></div>');
            $('#url1_dropdown').html('<div id="url1_dropdown_selected" class="vividDropDownBox_selected"></div><div id="url1_dropdown_selector" class="vividDropDownBox_selector"></div>');

            var optEls = $('#nb_url1_select option');
            optEls.each(function(idx,el) {
                var optEl2 = document.createElement('option');
                optEl2.value = JSON.stringify(it);
                optEl2.innerHTML = el.innerHTML;
                if (optEl2.innerHTML==$('.themeItem.onfocus').val()) {
                    $(optEl2)[0].selected = true;
                    $(optEl2).addClass('onfocus');
                };

                var divEl2 = document.createElement('div');
                $(divEl2).html(el.innerHTML);

                //$('#url1_select')[0].appendChild(optEl2);
                $('#nb_url1_dropdown_selector, url1_dropdown_selector').append(divEl2);
                if ($(optEl2)[0].selected) $('#nb_url1_dropdown_selected, #url1_dropdown_selected').html(el.innerHTML);
            });

            $('#url0').html('/'+$.cookie('cdb_loginName').replace(/.*___/g,'').replace(/__/g,'-')+'/');

            $('#nb_url1_dropdown, #url1_dropdown').hover(function() {
                $('#nb_url1_dropdown_selector, #url1_dropdown_selector').fadeIn('normal');
            }, function() {
                $('#nb_url1_dropdown_selector, #url1_dropdown_selector').fadeOut('normal');
            });

            $('#nb_url1_dropdown_selector > div, #url1_dropdown_selector > div').click(function(evt) {
                $('#nb_url1_dropdown_selected, #url1_dropdown_selected').html($(this).html());
                $('#nb_url1_dropdown_selector > div, #url1_dropdown_selector > div').removeClass('selected');
                $(this).add($('#'+$(this).parent()[0].id.replace('nb_',''))).addClass('selected');
                $('#nb_url2_value').css({width:120});
                na.blog.onchange_documentHeaders(evt,na.blog.onresize);
            });






            //});
        /*} /*else {
            $('#themes option').each(function(idx,optEl){
                $('#themeChange_themeName').html('');
                for (var i=0; i<na.site.globals.themesDBkeys.length; i++) {
                    var optEl2 = document.createElement('option');
                    //debugger;
                    optEl2.value = JSON.stringify(na.site.globals.themesDBkeys[i]);
                    optEl2.innerHTML = $(optEl).html();
                    if (optEl.innerHTML==$('.themeItem.onfocus').val()) {
                        $(optEl2)[0].selected = true;
                    };
                    $('#themeChange_themeName')[0].appendChild(optEl2);
                };

                optEl.selected=false;
                if (optEl.innerHTML==$('.themeItem.onfocus').val()) {
                    optEl.selected=true;
                }
            });

        }*/

        //na.setSiteLoginLogout();
    },

    loadTheme : function (callback, theme, doGetPageSpecificSettings, doSwitchSpecificities, specificityName, loadBackground, includeClientOnlyThemes, preserveCurrentTheme, stickToCurrentSpecificity) {
        var
        fncn = 'na.loadTheme(callback,theme)',
        s = na.te.settings.current.specificity,
        u = na.site.settings.url,
        apps = na.site.globals.app;

        if (typeof specificityName=='undefined') specificityName = na.site.globals.specificityName;
        if (typeof preserveCurrentTheme=='undefined') preserveCurrentTheme = true;

        for (var app in apps) break;

        na.site.settings.running_loadTheme = true;

        na.m.log (10, 'na.loadTheme() : STARTING.', false);

        if (
            !theme
            || typeof theme=='number' // when called via na.loadContent()
        ) theme = na.site.globals.themeName;

        na.te.settings.selectedThemeName = theme;

        // maybe use the immediately following line instead, depends on permissions checking in /NicerAppWebOS/logic.AJAX/ajax_database_loadTheme.php
        //if (!s) var s = { url : '[default]', role : 'guests', user : 'Guest' };

        //if (!s) var s = { url : '[default]' };
        if (doGetPageSpecificSettings) {

            if (preserveCurrentTheme) {
                var ct = na.site.globals.themes[theme];
            } else {
                var ct = null;
            }
            na.site.loadTheme_doGetPageSpecificSettings (function() {

                na.m.waitForCondition('na.te.settings.current.specificity?', function () {
                    return na.te.settings.current.specificity;
                }, function () {
                    na.site.loadTheme_do (callback, specificityName, theme, loadBackground);
                }, 20);

            }, doSwitchSpecificities, includeClientOnlyThemes, specificityName, theme, ct, stickToCurrentSpecificity);

        } else {
            na.m.waitForCondition('na.te.settings.current.specificity?', function () {
                return na.te.settings.current.specificity;
            }, function () {
                na.site.loadTheme_do (callback, specificityName, theme, loadBackground);
            }, 20);

        };
    },
    loadTheme_initializeExtras : function () {
        // gets called at the end of a chain started by onload_phase2()

/*
        if (
            na.site.globals.themes.default.themeSettings
            && (
                typeof na.site.globals.themes.default.themeSettings['Extras']!=='object'
                || typeof na.site.globals.themes.default.themeSettings['Extras'].length==='number'
            )
        ) {
*/


                        /*
            for (var themeID in na.site.globals.themes) break;
            na.site.globals.themes.default.themeSettings.Extras = {
                'texts' : {
                    'css' : {
                        '#siteContent > .vividDialogContent > li > a, p:not(.backdropped, .vividTextCSS), h1:not(.backdropped, .vividTextCSS), h2:not(.backdropped, .vividTextCSS), h3:not(.backdropped, .vividTextCSS)' : { opacity : // CULPRIT for blogging app na.site.globals.themes[themeID].textBackgroundOpacity, backgroundClip:'text' },
                        '#siteContent .newsApp__item__outer p' : { opacity : 1, backgroundClip:'none' }
                    }
                },
                'menus' : {
                    'css' : {
                        '.vividMenu_item' : { opacity : 1 }
                    }
                }
            };
  //      };
                        */

    },
    loadTheme_doGetPageSpecificSettings : function (callback, doSwitchSpecificities, includeClientOnlyThemes, specificityName, theme, ct, stickToCurrentSpecificity) {
        if (typeof includeClientOnlyThemes=='undefined') includeClientOnlyThemes = true;
        if (typeof stickToCurrentSpecificity=='undefined') stickToCurrentSpecificity = true;

        var
        state = History.getState(),
        url = state.url.replace(document.location.origin,'').replace('/view/', ''),
        url2 = url.replace(document.location.origin,'').replace(document.location.host,'').replace('/view/', ''),
        url3 = '/NicerAppWebOS/logic.AJAX/ajax_get_pageSpecificSettings.php',
        ac2 = {
            type : 'GET',
            url : url3,
            data : {
                viewID : na.m.base64_encode_url(JSON.stringify(na.site.globals.app)),// url2
                includeClientOnlyThemes : includeClientOnlyThemes || na.site.globals.specificityName.match(' client')?'true':'false',
                stickToCurrentSpecificity : stickToCurrentSpecificity,
                specificityName : na.site.globals.specificityName,
                c : na.m.changedDateTime_current()
            },
            success : function (data2, ts2, xhr2) {
                if (
                    typeof data2 == 'string'
                    && !data2.match(/E_FATAL/)
                    && !data2.match(/E_WARNING/)
                    && !data2.match(/E_NOTICE/)
                ) {
                    $('#cssPageSpecific, #jsPageSpecific').remove();
                    $('head').append(data2).delay(100);
                }
                if (doSwitchSpecificities) {
                    debugger;
                    if (ct && !na.site.globals.themes[ct.theme]) {
                        na.site.globals.themes[ct.theme] = ct;
                        na.site.globals.themeName = ct.theme;
                    } else {
                        if (theme) na.site.globals.themeName = theme;
                    }
                    na.setSpecificity(true);
                }
                setTimeout(function () {
                    if (typeof callback=='function') callback(true);
                }, 50);
            },
            error : function (xhr, textStatus, errorThrown) {
                na.ajaxFail(fncn, url3, xhr, textStatus, errorThrown);
            }
        };
        //setTimeout (function() {
            debugger;
            $.ajax(ac2);
        //}, 250);
    },

    loadTheme_do : function (callback, specificityName, theme, loadBackground) {
        var
        fncn = 'na.loadTheme_do(callback,theme)',
        s = na.te.settings.current.specificity,
        u = na.site.settings.url,
        apps = na.site.globals.app,
        acData = {
            orientation : na.site.settings.orientation//,
            //theme : theme//,
            //dialogs : JSON.stringify (na.desktop.settings.visibleDivs)
        };
        if (
            typeof specificityName=='undefined'
            || specificityName===null
        ) specificityName = na.site.globals.specificityName;
        if (typeof apps=='object')
            for (var app in apps) break;
        else app = apps;
        //if (app) acData.app = app;


        if (s) {
            if (s.view) acData.view = s.view;
            if (s.role) acData.role = s.role;
            if (s.user) acData.user = s.user;
            //if (s.specificityName) acData.specificityName = s.specificityName;
            acData.specificityName = specificityName;
            if (specificityName.match('current page')) {
                if (u) acData.url = u;
                if (s.url) acData.url = s.url;
                if (!acData.url) acData.url = window.location.href.replace('https://'+na.site.globals.domain,'');
            }
            if (specificityName.match('app \'')) {
                if (app) acData.app = app;
            }
            if (specificityName.match(/^site /)) {
                delete acData.view;
                delete acData.app;
                delete acData.url;
            }
        } else debugger;

        var
        url = '/NicerAppWebOS/logic.AJAX/ajax_database_loadTheme.php',
        ac = {
            type : 'POST',
            url : url,
            data : acData,
            success : function (data, ts, xhr) {
                // reload #cssPageSpecific and #jsPageSpecific
                if (data=='status : Failed.') {
                    na.m.log (10, 'na.loadTheme() : FAILED (HTTP SUCCESS, but no theme was found)');
                    na.loadTheme_applySettings (na.site.globals.themes[na.site.globals.themeName]);
                    if (typeof callback=='function') callback(true);
                    return false;
                } else if (data==='') {
                    na.m.log (10, 'na.loadTheme() : FAILED (HTTP SUCCESS, but no data returned at all)');
                    na.site.loadTheme_applySettings (na.site.globals.themes[na.site.globals.themeName]);
                    na.site.loadTheme_initializeExtras();
                    if (typeof callback=='function') callback(true);
                    return false;
                }
                try {
                    var themes = JSON.parse(data);
                } catch (error) {
                    na.m.log (10, 'na.loadTheme() : FAILED (could not decode JSON data - '+error.message+')+');
                    na.site.loadTheme_applySettings (na.site.globals.themes[na.site.globals.themeName]);
                    if (typeof callback=='function') callback(true);

                    // only significantly slows down startup for new viewers :
                    //na.fail (fncn+' : AJAX decode error in data returned for url='+url+', error='+error.message+', in data='+data, xhr, function () {
                    //    na.error (data);
                    //});
                    return false;
                }
                //na.site.globals.themes = themes;
                //na.site.components.theme = themes[theme];

                /*
                var html = ''; idx = 0;
                for (var themeName in themes) {
                    var dit = themes[themeName];

                    if (themeName==theme) {
                        html += '<div id="theme_'+idx+'" class="selected onfocus">'+themeName+'</div>';
                    } else {
                        html += '<div id="theme_'+idx+'">'+themeName+'</div>';
                    }
                }
                $('.na_themes_dropdown__themes > .vividDropDownBox_selector > .vividScrollpane').html(html);
                debugger;
                $('.na_themes_dropdown__themes > .vividDropDownBox_selected').html(theme);
                */

                var dat = themes[theme];
                /*
                for (var themeName in themes) {
                    var dat = themes[themeName];
                    na.site.components.theme = dat;
                    break;
                };*/
                //na.setSpecificity (true);
                na.site.loadTheme_applySettings (dat, callback, loadBackground);
                //na.te.onload('siteContent');
            },
            error : function (xhr, textStatus, errorThrown) {
                debugger;
                //only significantly slows down startup for new viewers :
                //na.ajaxFail(fncn, url, xhr, textStatus, errorThrown);
            }
        };
        $.ajax(ac);
    },

    loadTheme_applySettings : function (dat, callback, loadBackground) {
        if (!dat) {
            na.m.log (1, 'Error : loadTheme_applySettings() called with dat=undefined/false', false);
            return false;
        };
        if (typeof loadBackground=='undefined') loadBackground = true;
        //if (dat.specificityName) {
            $('.na_themes_dropdown__specificity > .vividDropDownBox_selector > div')
                .removeClass('selected')
                .each (function(idx,el) {
                    /*if (el.innerHTML === dat.specificityName) {
                        $(el).addClass('selected');
                        na.te.settings.current.specificity = na.site.globals.themesDBkeys[$(el).attr('value')];
                    };*/
                    /*
                    var l = Object.keys(na.site.globals.themesDBkeys).length - 1;
                    if (el.innerHTML === na.site.globals.themesDBkeys[l].specificityName) {
                        $(el).parent().find('.vividDropDownBox_selected').html(el.innerHTML);
                        $(el).addClass('selected');
                        na.site.globals.specificityName = el.innerHTML;
                        na.te.settings.current.specificity = na.site.globals.themesDBkeys[$(el).attr('value')];
                    };
                    */

                });
        //};

        if (dat.menusFadingSpeed) {
            $('#menusFadingSpeed').val(dat.menusFadingSpeed);
            for (var menuID in na.site.components.menus) {
                var m = na.site.components.menus[menuID];
                m.fadingSpeed = parseInt(dat.menusFadingSpeed);
            }
        }

        /*
        $('#menusUseRainbowPanels')[0].checked = dat.menusUseRainbowPanels !== 'false';
        if (dat.menusUseRainbowPanels) {
            for (var menuID in na.site.components.menus) {
                var m = na.site.components.menus[menuID];
                m.percentageFor_rainbowPanels = dat.menusUseRainbowPanels === 'false' ? 0 : 100;
            }

        }*/
debugger;
        if (loadBackground && dat.background /*&& dat.background!==na.site.globals.background*/) { /* doesn't jive with na.loadContent() */
            na.background.next (
                '#siteBackground',
                na.site.globals.backgroundSearchKey,
                dat.background,
                false
            );
        } else if (loadBackground && !dat.background /*&& dat.background!==na.site.globals.background*/) { /* doesn't jive with na.loadContent() */
            na.background.next (
                '#siteBackground',
                na.site.globals.backgroundSearchKey,
                na.site.globals.background,
                false
            );
        }

        clearInterval (na.site.settings.backgroundChangeInterval);
        if (dat.changeBackgroundsAutomatically=='true') {
    //$('#changeBackgroundsAutomatically')[0].checked = true;
            /*
            var m = $('#backgroundChange_minutes').val();
            var h = $('#backgroundChange_hours').val();
            var ms = ((h * 60)+1) * (m * 60) * 1000;
            na.site.components.backgroundChangeInterval = setInterval (function() {
                na.backgrounds.next (
                    '#siteBackground',
                    na.site.globals.backgroundSearchKey,
                    null,
                    true
                );
            }, ms);
            */
        }
        if (dat.backgroundChange_hours) $('#backgroundChange_hours').val(dat.backgroundChange_hours);
        if (dat.backgroundChange_minutes) $('#backgroundChange_minutes').val(dat.backgroundChange_minutes);
        if (dat.vdSettings_show) $('#vdSettings_show').val(dat.vdSettings_show);
        else $('#vdSettings_show').val('transparent');

        var opacity = (
            $('#vdSettings_show').val()=='hidden'
            ? 0.000001
            : $('#vdSettings_show').val()=='transparent'
                ? 0.5
                : 1
        );
        setTimeout (function() {
            $('.vdSettings').delay(50).css({ opacity : opacity });
        }, 1500);

        var
        h = parseInt($('#backgroundChange_hours').val()),
        m = parseInt($('#backgroundChange_minutes').val()),
        ms = (
            ( h > 0 ? (h * 60) : 1) // 60 minutes in an hour
            * (m > 0 ? (m * 60) : 1) // 60 seconds in a minute
            * 1000 // 1000 milliseconds in a second
        );
        clearInterval (na.site.settings.backgroundChangeInterval);
        //if ($('#changeBackgroundsAutomatically')[0].checked)
        if (true)
        na.site.settings.backgroundChangeInterval = setInterval (function() {
            na.background.next (
                '#siteBackground',
                na.site.globals.backgroundSearchKey,
                null,
                true,
                "na.site.components.backgroundChangeInterval() : this website's backgroundChangeInterval is currently turned on to occur every "+(ms/1000)+" seconds."
            );
        }, ms);

        if (dat.textBackgroundOpacity) {
            na.te.settings.current.textBackgroundOpacity = dat.textBackgroundOpacity;
            $('#btnOptions_menu input.sliderOpacityRange').val(dat.textBackgroundOpacity * 100);
            /*
            $('li span, p, h1, h2, h3').css({
                background : 'rgba(0,0,0,'+dat.textBackgroundOpacity+')'
            });
            */
//debugger;
            $('#siteContent > .vividDialogContent > li > a, p, h1, h2, h3').not('.naVividTextCSS, .contentSectionTitle1, .contentSectionTitle1_a, .contentSectionTitle1_span, .contentSectionTitle2, .contentSectionTitle2_a, .contentSectionTitle2_span, .contentSectionTitle3, .contentSectionTitle3_a, .contentSectionTitle3_span, .backdropped, .animatedText_orangeYellow, .animatedText_blue, .animatedText_ivory, .naExternalLink, .naInternalLink, .naText').each (function(idx,el) {
                var bg = na.m.adjustColorOpacity(el, dat.textBackgroundOpacity);
                if (bg) $(el).css({background:bg});
            });
        }
        if (dat.themeSettings && dat.themeSettings['.vividDialog']) {
            $('.vividDialog').css(dat.themeSettings['.vividDialog']);
            $('.vividDialog > .vividDialogBackground1').css(dat.themeSettings['.vividDialog > .vividDialogBackground1']);
        };
        if (dat.themeSettings)
        for (var category in dat.themeSettings) {
            if (
                dID=='.vividDialog'
                || dID=='.vividDialog > .vividDialogBackground1'
                || dID=='.vividDialogBackground1'
            ) continue;
            var categoryItems = dat.themeSettings[category];
            switch (category) {
                case 'Dialogs' :
                    for (var dID in categoryItems) {
                        var dit = categoryItems[dID].css;
                        for (var divSel in dit) {
                            var dit2 = dit[divSel];
                            if (divSel=='#siteToolbarThemeEditor') dit2.opacity = 1; // dirty hack
                            $(divSel).css (dit2);
                            if (dit2.background && dID == '#'+na.te.settings.forDialogID+' > .vividDialogBackground1') {
                                var
                                del = $(dID)[0],
                                rgbaRegEx = /rgba\(\d{1,3}\,\s*\d{1,3}\,\s*\d{1,3}\,\s*([\d\.]+)\).*/,
                                test = rgbaRegEx.test(dit.background),
                                ditbgOpacity = test ? dit.background.match(rgbaRegEx)[1] : dit.opacity;
                                $('.sliderOpacityRange', del).attr('value', ditbgOpacity*100);
                                if (test && na.te.settings.selectedButtonID == 'btnSelectBackgroundColor') {
                                    $('#colorpicker').css({display:'block'}).spectrum ({
                                        color:dit.background,
                                        type:'flat',
                                        clickoutFiresChange : false,
                                        change : function (color) {
                                            var bg = $('.vividDialogBackground1', $('#'+na.te.settings.forDialogID)[0]);
                                            $(bg).css({ background : color, opacity : 1 });
                                            na.te.settings.fireSaveTheme = true;
                                            na.saveTheme();
                                        }
                                    }).css({display:'none'});
                                }
                            }
                        }
                    }
                    break;
                case 'Apps' :
                    for (var appName in categoryItems) {
                        var appItem = categoryItems[appName].css;
                        for (var divSel in appItem) {
                            var dit = appItem[divSel];

                            /* messes up theme loading :
                            for (var prop in dit) {
                                var v = dit[prop];
                                if (typeof v=='string' && !v.match(/\!important/)) {
                                    dit[prop] = dit[prop].replace(';','').replace(/\s\s/g,' ').trim();
                                    dit[prop] += ' !important';
                                }
                            }
                            */

                            $(divSel).css(dit);

                            /*
                            if (dit.background && dID == '#'+na.te.settings.forDialogID+' > .vividDialogBackground1') {
                                var
                                del = $(dID)[0],
                                rgbaRegEx = /rgba\(\d{1,3}\,\s*\d{1,3}\,\s*\d{1,3}\,\s*([\d\.]+)\).* /,
                                test = rgbaRegEx.test(dit.background),
                                ditbgOpacity = test ? dit.background.match(rgbaRegEx)[1] : dit.opacity;
                                $('.sliderOpacityRange', del).attr('value', ditbgOpacity*100);
                                if (test && na.te.settings.selectedButtonID == 'btnSelectBackgroundColor') {
                                    $('#colorpicker').css({display:'block'}).spectrum ({
                                        color:dit.background,
                                        type:'flat',
                                        clickoutFiresChange : false,
                                        change : function (color) {
                                            var bg = $('.vividDialogBackground1', $('#'+na.te.settings.forDialogID)[0]);
                                            $(bg).css({ background : color, opacity : 1 });
                                            na.te.settings.fireSaveTheme = true;
                                            na.saveTheme();
                                        }
                                    }).css({display:'none'});
                                }
                            }*/
                        }
                    }
                    break;
                case 'Extras' :
                    for (var btnAddGraphics_jsTreeText in categoryItems) {
                        var it = categoryItems[btnAddGraphics_jsTreeText].css;
                        for (var divSel in it) {
                            var dit = it[divSel];

                            /* messes up theme loading :
                            for (var prop in dit) {
                                var v = dit[prop];
                                if (typeof v=='string' && !v.match(/\!important/)) {
                                    dit[prop] = dit[prop].replace(';','').replace(/\s\s/g,' ').trim();
                                    dit[prop] += ' !important';
                                }
                            }
                            */

                            $(divSel).css(dit);
                            /*
                            if (dit.background && dID == '#'+na.te.settings.forDialogID+' > .vividDialogBackground1') {
                                var
                                del = $(dID)[0],
                                rgbaRegEx = /rgba\(\d{1,3}\,\s*\d{1,3}\,\s*\d{1,3}\,\s*([\d\.]+)\).* /,
                                test = rgbaRegEx.test(dit.background),
                                ditbgOpacity = test ? dit.background.match(rgbaRegEx)[1] : dit.opacity;
                                $('.sliderOpacityRange', del).attr('value', ditbgOpacity*100);
                                if (test && na.te.settings.selectedButtonID == 'btnSelectBackgroundColor') {
                                    $('#colorpicker').css({display:'block'}).spectrum ({
                                        color:dit.background,
                                        type:'flat',
                                        clickoutFiresChange : false,
                                        change : function (color) {
                                            var bg = $('.vividDialogBackground1', $('#'+na.te.settings.forDialogID)[0]);
                                            $(bg).css({ background : color, opacity : 1 });
                                            na.te.settings.fireSaveTheme = true;
                                            na.saveTheme();
                                        }
                                    }).css({display:'none'});
                                }
                            }*/
                        }
                    }
                    break;
            }
        };

        na.m.log (10, 'na.loadTheme_applySettings() : FINISHED.', false);
        na.site.settings.running_loadTheme = false;
        if (typeof callback=='function') callback(true);
    },

    saveTheme : function (callback, theme, loadBackground) {
        var
        fncn = 'na.saveTheme(callback,theme)',
        s = na.te.settings.current.specificity,
        u = na.site.components.url,
        apps = na.site.globals.app;

        //if (!na.te.settings.current.forDialogID && !na.te.settings.current.forElements)
            na.te.onload('siteContent');

        //if (!theme) theme = na.site.globals.themeName;
        na.site.components.running_saveTheme = true;

        if (typeof apps=='object')
            for (var app in apps) break;
        else var app = apps;

        na.m.log (10, 'na.saveTheme() : STARTING.', false);

        if (!s) return false;
        if (!theme) theme = $('.na_themes_dropdown__themes > .vividDropDownBox_selected > .vividScrollpane').html();

        clearTimeout (na.site.components.saveThemeTimeout);
        na.site.components.saveThemeTimeout = setTimeout(function() {
            var tApp = null;
            if (
                na.site.globals.themes
                && na.site.globals.themes[theme]
                && na.site.globals.themes[theme].apps
            ) tApp = na.site.globals.themes[theme].apps;

            var
            themeData = {
                specificityName : $('.na_themes_dropdown__specificity > .vividDropDownBox_selected').html(),
                theme : theme,
                orientation : na.site.components.orientation,
                backgroundSearchKey : na.site.globals.backgroundSearchKey,
                background : na.site.globals.background,
                changeBackgroundsAutomatically : 'true',//$('#changeBackgroundsAutomatically')[0].checked?'true':'false',
                vdSettings_show : 'hidden',//$('#vdSettings_show').val(),
                backgroundChange_hours : 0,//$('#backgroundChange_hours').val(),
                backgroundChange_minutes : 1,//$('#backgroundChange_minutes').val(),
                menusFadingSpeed : 500,//$('#menusFadingSpeed').val(),
                menusUseRainbowPanels : 'true',//$('#menusUseRainbowPanels')[0].checked ? 'true' : 'false',
                dialogs : {},
                apps : tApp,
                //view : na.site.components.app,
                textBackgroundOpacity : 0.4//parseInt($('#textBackgroundOpacity').val()) / 100
            };

            if (s.view) themeData.view = s.view; //else if (s.url) themeData.url = s.url;
            if (s.role) themeData.role = s.role;
            if (s.user) themeData.user = s.user;
            if (s.specificityName) themeData.specificityName = s.specificityName;
            if (s.specificityName.match('current page')) {
                if (u) themeData.url = u;
                if (s.url) themeData.url = s.url;
                if (!themeData.url) themeData.url = window.location.href.replace('https://'+na.site.globals.domain,'');
                //if (themeData.app) delete themeData.app;
            }
            if (
                typeof s.specificityName=='string'
                && (
                    s.specificityName.match(/site /)
                    || s.specificityName.match(/current page/)
                )
            ) {
                delete themeData.view;
                delete themeData.app;
            }
            if (
                typeof s.specificityName=='string'
                && s.specificityName.match(/app /)
            ) {
                delete themeData.view;
                if (app) themeData.app = app;
            }
            if (
                typeof s.specificityName=='string'
                && s.specificityName.match(/user /)
            ) {
                delete themeData.role;
                if (themeData.app) delete themeData.app;
            }


            /*
            for (var i=0; i<na.desktop.globals.divs.length; i++) {
                var selector = na.desktop.globals.divs[i];
                themeData.dialogs = $.extend (themeData.dialogs, na.fetchTheme (selector));
            }*/

            themeData = na.site.loadTheme_fetchDialogs(themeData);
            na.site.loadTheme_applySettings (themeData, null, false); // apply theme changes, all except .background in this case.
            na.site.globals.themes[na.site.globals.themeName] = $.extend({}, themeData);

            // ENCAPSULATE (ENCODE) json objects for HTTP transport
            themeData.themeSettings = JSON.stringify(themeData.themeSettings);
            themeData.apps = JSON.stringify(Object.assign({},themeData.apps));
            //if (themeData.dialogs.indexOf('+')!==-1) themeData.dialogs = themeData.dialogs.replace(/\+/g, ' ');
            //if (themeData.dialogs.indexOf('\\')!==-1) themeData.dialogs = themeData.dialogs.replace(/\\/g, '');

            var
            url = '/NicerAppWebOS/logic.AJAX/ajax_database_saveTheme.php?viewID='+na.m.base64_encode_url(JSON.stringify(na.site.globals.app)),
            ac2 = {
                type : 'POST',
                url : url,
                data : themeData,
                success : function (data, ts, xhr) {
                    if (data.match('status : Failed')) {
                        //na.site.ajaxFail('na.saveTheme() : Could not save settings. Please login again.');


        /*.fadeIn('normal', 'swing', function () {
                            setTimeout (function() {
                                $('#siteLoginFailed').fadeOut('normal', 'swing');
                            }, 2 * 1000);

                        });*/
                        na.m.log (10, 'na.saveTheme() : FAILED.');

                    } else {
                        //na.site.globals.specificityName = na.site.globals.specificityName_revert;
                        //na.setSpecificity();

                        //na.loadTheme(null, null, false); //REPLACED with .loadTheme_applySettings() in the block above this AJAX call.

                        na.m.log (10, 'na.saveTheme() : FINISHED.', false);
                        na.site.components.running_saveTheme = false;
                        if (typeof callback=='function') callback (themeData, data);
                    }
                },
                error : function (xhr, textStatus, errorThrown) {
                    na.m.log (10, 'na.saveTheme() : FAILED (HTTP ERROR CODE : '+xhr.status+', HTTP ERROR MSG : '+errorThrown+')+');
                    na.ajaxFail(fncn, url, xhr, textStatus, errorThrown);
                }
            };
            //debugger;
            $.ajax(ac2);
        }, 750);
    },

    loadTheme_fetchDialogs : function (themeData) {
        themeData = $.extend (na.site.globals.themes[na.site.globals.themeName], themeData);
        for (var divSel in na.site.settings.dialogs) {
            if (!themeData.themeSettings) {
                themeData.themeSettings = { // gets initialized through na.onload_phase2() calling na.loadTheme()
                    Dialogs : {}, // filled in below here.
                    Apps : {}, // ditto
                    Extras :  na.te.transform_jsTree_to_siteGlobalsThemes() // pulls data modified by end-users from the Theme Editor back into this na.saveTheme() AJAX call
                };
            }
            if (!themeData.themeSettings.Apps) themeData.themeSettings.Apps = {};

            var
            regExDialogs = /#site(.*)[\s\w\.\#\d\>]*/,
            regExApps = /#app__(.*)__(.*)$/;
            if (divSel.match(regExDialogs)) {
                var divName = divSel.match(regExDialogs)[1];
                if (!themeData.themeSettings['Dialogs'][divName])
                    themeData.themeSettings['Dialogs'][divName] = { css : {} };
                themeData.themeSettings['Dialogs'][divName]['css'] =
                    $.extend (
                        themeData.themeSettings['Dialogs'][divName]['css'],
                        na.site.fetchTheme (divSel)
                    );
            } else if (divSel.match(regExApps)) {
                var
                m = divSel.match(regExApps),
                appName = m[1],
                appDialogName = m[2];
                if (!themeData.themeSettings['Apps'][appName])
                    themeData.themeSettings['Apps'][appName] = { css : {} };
                //if (!themeData.themeSettings['Apps'][appName]['css'][divSel])
                themeData.themeSettings['Apps'][appName]['css'] =
                    $.extend(
                        themeData.themeSettings['Apps'][appName]['css'],
                        na.site.fetchTheme(divSel)
                    );
            }
        };

        //if (!themeData.themeSettings.Extras)
        try {
            themeData.themeSettings.Extras = na.te.transform_jsTree_to_siteGlobalsThemes();
        } catch (err) {
            debugger;
        }

        return themeData;
    },

    fetchTheme : function (selector) {
        var ret = {};
        ret[selector] = {
            border : $(selector).css('border'),
            borderRadius : $(selector).css('borderRadius'),
            boxShadow : $(selector).css('boxShadow'),
            color : $(selector).css('color'),
            fontSize : $(selector).css('fontSize'),
            fontWeight : $(selector).css('fontWeight'),
            fontFamily : $(selector).css('fontFamily'),
            textShadow : $(selector+' > .vividDialogContent').css('textShadow')//,
            //opacity : $(selector).css('opacity')
        };
        ret[selector].border = // firefox work-around
            $(selector).css('borderTopWidth')+' '
            //+$(selector).css('borderRightWidth')+' '
            //+$(selector).css('borderBottomWidth')+' '
            //+$(selector).css('borderLeftWidth')+' '
            +$(selector).css('borderTopStyle')+' '
            //+$(selector).css('borderRightStyle')+' '
            //+$(selector).css('borderBottomStyle')+' '
            //+$(selector).css('borderLeftStyle')+' '
            +$(selector).css('borderTopColor')+' '
            //+$(selector).css('borderRightColor')+' '
            //+$(selector).css('borderBottomColor')+' '
            //+$(selector).css('borderLeftColor')+' ';
        ret[selector].borderRadius = // firefox work-around
            $(selector).css("borderTopLeftRadius")+' '
            +$(selector).css("borderTopRightRadius")+' '
            +$(selector).css("borderBottomRightRadius")+' '
            +$(selector).css("borderBottomLeftRadius")+' ';





        if (!$(selector+' > .vividDialogBackground1')[0]) {
            if ($(selector).css('opacity')!=='') {
                ret[selector].opacity = $(selector).css('opacity');
            };
            if ($(selector).css('backgroundSize')!=='') {
                ret[selector].backgroundSize = $(selector).css('backgroundSize');
            };

            if ($(selector).css('backgroundImage') && $(selector).css('backgroundImage')!=='' && !$(selector).css('backgroundImage').match(/none/)) {
                ret[selector].background =
                    $(selector).css('backgroundImage').match(/url\(.*\).*%/)
                        ? $(selector).css('backgroundImage')
                        : $(selector).css('backgroundImage').replace(')',') 0% 0% / ')
                    +$(selector).css('backgroundSize')+' '
                    +$(selector).css('backgroundRepeat');
            } else if ($(selector).css('backgroundColor') !== '') {
                ret[selector].background = $(selector).css('backgroundColor');
            }
        };


        if (
            !selector.match(/,/)
            && $(selector+' > .vividDialogBackground1').length>0
        ) { // for vividDialogs only
            ret[selector+' > .vividDialogBackground1'] = {
                opacity : $(selector+' > .vividDialogBackground1').css('opacity'),
                background :
                    $(selector+' > .vividDialogBackground1').css('background') && $(selector+' > .vividDialogBackground1').css('background') !==''
                    ? $(selector+' > .vividDialogBackground1').css('background').match(/url\(.*\).*%/)
                        ? $(selector+' > .vividDialogBackground1').css('background')
                        : $(selector+' > .vividDialogBackground1').css('background').replace(')',') 0% 0% / ')
                    : 'none',
                borderRadius : $(selector).css('borderRadius'),
                backgroundSize : $(selector+' > .vividDialogBackground1').css('backgroundSize'),
                boxShadow : $(selector+' > .vividDialogBackground1').css('boxShadow')
            };
            ret[selector+' > .vividDialogBackground1'].borderRadius = ret[selector].borderRadius;

            // bugfix for firefox :
            if (
                ret[selector+' > .vividDialogBackground1'].background===''
                && $(selector+' > .vividDialogBackground1').css('backgroundImage') !== ''
            ) ret[selector+' > .vividDialogBackground1'].background =
                $(selector+' > .vividDialogBackground1').css('backgroundImage').replace(/http.*?\/\/.*?\//,'')+' '
                +$(selector+' > .vividDialogBackground1').css('backgroundSize')+' '
                +$(selector+' > .vividDialogBackground1').css('backgroundRepeat');

            if (
                ret[selector+' > .vividDialogBackground1'].background
                && (
                    ret[selector+' > .vividDialogBackground1'].background===''
                    || ret[selector+' > .vividDialogBackground1'].background.match('none')
                )
                && $(selector+' > .vividDialogBackground1').css('backgroundColor') !== ''
            ) ret[selector+' > .vividDialogBackground1'].background = $(selector+' > .vividDialogBackground1').css('backgroundColor');
        };

        /*
        ret[selector+' td'] = {
            fontSize : $(selector+' td').css('fontSize'),
            fontWeight : $(selector+' td').css('fontWeight'),
            fontFamily : $(selector+' td').css('fontFamily'),
            textShadow : $(selector+' td').css('textShadow')
        };
        */
        if (ret[selector].fontFamily) ret[selector].fontFamily = ret[selector].fontFamily.replace(/"/g, '');
        //if (ret[selector+' td'].fontFamily) ret[selector+' td'].fontFamily = ret[selector+' td'].fontFamily.replace(/"/g, '');
        return ret;
    }
};
