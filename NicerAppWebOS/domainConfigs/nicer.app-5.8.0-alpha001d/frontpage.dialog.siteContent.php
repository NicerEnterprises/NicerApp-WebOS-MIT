<?php
    global $naWebOS;
    global $naURLs;
    //echo $naWebOS->basePath.'/NicerAppWebOS/domainConfigs/'.$naWebOS->domainFolder.'/pageHeader.php'; exit();
    require_once ($naWebOS->basePath.'/NicerAppWebOS/domainConfigs/'.$naWebOS->domainFolder.'/pageHeader.php');
?>
    <script type="text/javascript">
        delete na.site.settings.current.app;
        na.m.waitForCondition ('frontPage.dialog.siteContent.php : desktopIdle?', na.m.desktopIdle, function() {
            na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs, '#siteToolbarLeft');
            na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs, '#siteToolbarRight');
            na.d.s.visibleDivs = arrayRemove (na.d.s.visibleDivs, '#siteToolbarTop');
            //na.desktop.resize();
        }, 100);
    </script>


    <div style="width:40%;color:black;background:rgba(250, 233, 52,0.35);font-size:120%;margin:10px;font-weight:bold;padding:8px;border-radius:10px;text-shadow:0px 0px 3px rgba(255,0,0,0.7);box-shadow:0px 0px 8px 4px rgba(0,0,0,0.666), 2px 2px 2px rgba(0,0,0,0.7);">
    <blockquote style="font-size:x-large;color:yellow;text-shadow:0px 0px 3px rgba(0,0,0,0.7),-2px -2px 2px rgba(0,0,0,0.663),4px 4px 3px rgba(0,0,0,0.8);  margin:15px;padding:8px;border:3px ridge brightyellow; border-radius:5px;background:rgba(0,0,0,0.4);box-shadow:0px 0px 5px 4px rgba(255,255,255,0.555), 3px 3px 5px 2px rgba(0,0,0,0.7);">
    Take a video or (tiled) background of any resolution, and project information onto that using any weblanguage you want.<br/>
    Written in a style simple enough for children to learn from.<br/>
    Best viewed in Chrome, Chromium based browsers or FireFox or Edge.
    </blockquote>
    <meta name="description" content="Take a video or (tiled) background of any resolution, and project information onto that using any weblanguage you want. Written in a style simple enough for children to learn from.">
    <p style="font-size:x-large;color:yellow;text-shadow:0px 0px 3px rgba(0,0,0,0.7),-2px -2px 2px rgba(0,0,0,0.663),4px 4px 3px rgba(0,0,0,0.8);  margin:15px;padding:8px;border:3px ridge yellow; border-radius:5px;background:rgba(0,0,0,0.4);box-shadow:0px 0px 5px 2px rgba(255,255,255,0.555), 3px 3px 3px 5px rgba(0,0,0,0.7);">
    This is the <a href="https://github.com/NicerEnterprises/NicerApp-WebOS-MIT" class="contentSectionTitle3_a1 nomod noPushState" target="NicerEnterprises---NicerApp-WebOS---on---GitHub-dot-com"><span class="contentSectionTitle3_a1" style="box-shadow:none; padding:0px;margin:0px; color:lime;">5th major version, 5.8.0-alpha001d to be exact</span></a> of this software.
    </p>
    <p style="font-size:x-large;color:yellow;text-shadow:0px 0px 3px rgba(0,0,0,0.7),-2px -2px 2px rgba(0,0,0,0.663),4px 4px 3px rgba(0,0,0,0.8);  margin:15px;padding:8px;border:3px ridge yellow; border-radius:5px;background:rgba(0,0,0,0.4);box-shadow:0px 0px 5px 2px rgba(255,255,255,0.555), 3px 3px 3px 5px rgba(0,0,0,0.7);">
    You should disable your VPN (if you can), or at least for this website. VPNs significantly reduce loading speed for websites like these, rich in graphics and client-side user-interface code.
    </p>

    <p style="font-size:x-large;color:yellow;text-shadow:0px 0px 3px rgba(0,0,0,0.7),-2px -2px 2px rgba(0,0,0,0.663),4px 4px 3px rgba(0,0,0,0.8);  margin:15px;padding:8px;border:3px ridge yellow; border-radius:5px;background:rgba(0,0,0,0.4);box-shadow:0px 0px 5px 2px rgba(255,255,255,0.555), 3px 3px 3px 5px rgba(0,0,0,0.7);">
    Future direction for this company, that might be renamed from 'NicerEnterprises' to something else (pending domain name registration):
    <ul>
        <li>Full 3D + 2D web interface functionality; the real goal of the latest incarnation of this software, rolled up into a vividUserInterface repository, which might not be for free anymore.
        <li>Full webshop functionality; Secure IMAP email facilities (also cloudhosting compatible versions), Banking Accountancy and Tax Filing modules, and the actual webshop interface with product placement admin interface and email marketing also done from the same admin interface, as just it's 1st finalized feature set. For version 5.9.z, to be released between Jan 2026 and Dec 1st 2026, on a domain name that's yet to be thought up (by me myself) :-)</li>
    </ul>
    </p>
    </div>

    <h2 class="contentSectionTitle1"><span class="contentSectionTitle1_span">Stable Apps offered (but not right now) on the NicerApp-WebOS homepage :</span></h2>
    <?php
        /* REQUIRED ACCORDING TO 2025 LAWS THAT GOVERN HTTPS://nicer.app/music */
        global $naLAN;
        global $naURLs;
        global $naSettings_app2D_musicPlayer_respectDutchCopyright;
        if (!$naSettings_app2D_musicPlayer_respectDutchCopyright || $naLAN) {
    ?>
        <a href="<?php echo $naURLs['music'];?>" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">Music</span></h3></a>
        <div style="width:40%;margin:10px;padding:8px;color:070707;text-shadow:2px 2px 4px 3px rgba(0,0,0,0.75),0px 0px 5px 4px rgba(0,0,0,0.85);background:rgba(0,0,0,0.45);border-radius:5px;">
            <p>
            <a class="nomod noPushState" target="_new" href="/NicerAppWebOS/screenshots/2025%20A.D./Screenshot_20250622_015900.png"><img src="/NicerAppWebOS/screenshots/2025%20A.D./Screenshot_20250622_015900.png" style="width:35%"/></a>

            <p>
            If I don't respect Copyright Law(s) for a while, or don't indefinitely until a fear generating situation somewhere, -anywhere-, in the world changes for the betterment of all in that region/locality or those regions/localities, then <a href="/geopolitics" style="color:lime;">I'll explain myself as best I can right here</a>.
            </p>

            <p>
            Fear can be deadly. It can lead to distractions while in traffic, and/or (severe) sleep-deprivation.<br/>
            Even the poorest deserve to be free from fear at all times.<br/>
            </p>

            <p>
            I am also, to avoid future conflicts with the music industries and their copyright lawyers, looking and working hard to turn nicer.app/music into a music production and distribution hub for amateur- to professional-music-artists using 'Sonic PI for Linux'.
            </p>

            <p>
            Having said all that previously, I do wish to bring copyrighted music works in their entirety online in the digital world-wide global space again, despite recent apparent sharpening of the Dutch copyright law.<br/>
            Or is this 'sharpening' being exaggerated in Dutch government websites? I just can't properly tell that yet. But I'll ask around.
            </p>
        </div>
    <?php } ?>
    
    <!--
        TAKEN OFFLINE 2025-06-25 00:20 CEST AMS AMSTERDAM.NL TIMEZONE
        For reasons not revealed as they are top-secret even to me.
        Meaning : I do not even know the real reason for this, am not going to guess about it,
        and will not inquire about it for anyone.
        IF and WHEN these NATO and/or EU and/or UK orders for me change, then I will gladly bring this app back online.
        But the fact remains that with the change over from 5.7 to 6.x (renamed as 5.8 now), a *lot* of new bugs appeared in the page loading mechanism, that got upgraded when 6.x was written. These bugs have to be dealt with first, and then there's my hardware upgrades, networking settings (complicated, as it involves cryptography), etc, etc, to get through first.

        <h3 id="h3_news" class="contentSectionTitle3 contentSectionTitle3_darker"><span class="contentSectionTitle3_span_darker">News</span></h3>
        <ul class="index" style="margin-block-end:33px;">
            <li><div class="contentSectionTitle3"><a href="<?php echo $naURLs['newsHeadlines_englishNews'];?>" class="contentSectionTitle3_a"><span class="contentSectionTitle3_span backdropped">English News</span></a></div></li>
            <li><div class="contentSectionTitle3"><a href="<?php echo $naURLs['newsHeadlines_englishNews_worldHeadlines'];?>" class="contentSectionTitle3_a"><span class="contentSectionTitle3_span backdropped">English News : World Headlines only</span></a></div></li>
            <li><div class="contentSectionTitle3"><a href="/business-news" class="contentSectionTitle3_a"><span class="contentSectionTitle3_span backdropped">English Business News</span></a></div></li>
            <li><div class="contentSectionTitle3"><a href="<?php echo $naURLs['newsHeadlines_nederlandsNieuws'];?>" class="contentSectionTitle3_a"><span class="contentSectionTitle3_span backdropped">Nederlands Nieuws</span></a></div></li>
            <li><div class="contentSectionTitle3"><a href="<?php echo $naURLs['newsHeadlines_nederlandsNieuws_wereldNieuws'];?>" class="contentSectionTitle3_a"><span class="contentSectionTitle3_span backdropped">Nederlands Nieuws : Internationale Headlines</span></a></div></li>
            <li><div class="contentSectionTitle3"><a href="<?php echo $naURLs['newsHeadlines_deutscheNachrichten'];?>" class="contentSectionTitle3_a"><span class="contentSectionTitle3_span backdropped">Deutsche Nachrichten</span></a></div></li>
            <li><div class="contentSectionTitle3"><a href="<?php echo $naURLs['newsHeadlines_arabic'];?>" class="contentSectionTitle3_a"><span class="contentSectionTitle3_span backdropped">Arabic Business News (in English)</span></a></div></li>
        </ul>
    -->
    
    <a href="<?php echo $naURLs['tarot'];?>" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">Tarot cardgame</span></h3></a>

    <a href="https://said.by" class="contentSectionTitle3_a" target="saidBy"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">Blogging features (on https://said.by)</span></h3></a>
    
    <a href="https://zoned.at" target="zonedAt" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">URL redirection (on https://zoned.at)</span></h3></a>

    <h2 class="contentSectionTitle1" ><span class="contentSectionTitle1_span">Alpha</span></h2>
    <a href="/wiki/frontpage" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">Wikipedia.org view</span></h3></a><br/>

    <h2 class="contentSectionTitle1" ><span class="contentSectionTitle1_span">Demos</span></h2>
    <a href="<?php echo $naURLs['3Dcube'];?>" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">3D demo : cube</span></h3></a>
    <a href="<?php echo $naURLs['3Dmodels'];?>" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">3D demo : loading of models (slow to start up)</span></h3></a>
    <a href="<?php echo $naURLs['backgroundsBrowser'];?>" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">3D file explorer</span></h3></a>

    <h2 class="contentSectionTitle1"><span class="contentSectionTitle1_span">Administrative features</span></h2>
    <a href="/filePhoenix" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">NicerEnterprises FilePhoenix</span></h3></a><br/>
<?php 
    global $naLAN; 
    if ($naLAN) { 
?>

    <a href="<?php echo $naURLs['analytics'];?>" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">Analytics</span></h3></a>

    <a href="/view/logs" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">Logs</span></h3></a>

    <!--
    <a href="<?php echo $naURLs['tasks'];?>" class="contentSectionTitle3_a"><h3 class="contentSectionTitle3"><span class="contentSectionTitle3_span">Tasks</span></h3></a>
    -->
<?php } ?>

    <h1 class="contentSectionTitle1" style="width:40%;padding:8px;color:070707;text-shadow:2px 2px 3px rgba(0,0,0,0.75),0px 0px 4px rgba(0,0,0,0.85); background:rgba(0,0,0,0.45);border-radius:5px;"><p class="contentSectionTitle1_span">NicerEnterprises Company Profile</p></h1>
    <div style="width:40%;color:black;background:rgba(250, 233, 52,0.35);font-size:120%;margin:10px;font-weight:bold;padding:8px;border-radius:10px;text-shadow:0px 0px 3px rgba(255,0,0,0.7);box-shadow:0px 0px 8px 4px rgba(0,0,0,0.666), 2px 2px 2px rgba(0,0,0,0.7);">
        <p style="background:none;">
        <a href="https://nicer.app" target="naHP">https://nicer.app</a>, <a href="https://said.by" target="sbHP">https://said.by</a>, <a href="https://zoned.at" target="zAt">https://zoned.at</a>, <a href="https://github.com/NicerEnterprises" target="githubNicerEnterprises">https://github.com/NicerEnterprises</a>, in addition to ALL of the content listed on and/or hosted by the cloudhosting service companies, online forums and social media accounts that I use (or have ever used), are ENTIRELY
        Copyrighted (C) and All Rights Reserved (R) 2002-2025 and owned by <a href="mailto:rene.veerman.netherlands@gmail.com" target="_new" class="nomod noPushState">Rene A.J.M. Veerman &lt;rene.veerman.netherlands@gmail.com&gt;</a>.<br/>
        </p>

        <p style="background:none;"><a href="https://x.com/ReneVeerma64021">https://x.com/ReneVeerma64021</a>.</p>
    </div>


    <!-- Less of a problem these days (2025-06-27 23:17CEST AMS Amsterdam.NL timezone)
    <h1 class="contentSectionTitle1" style="width:40%;padding:8px;color:070707;text-shadow:2px 2px 3px rgba(0,0,0,0.75),0px 0px 4px rgba(0,0,0,0.85); background:rgba(0,0,0,0.45);border-radius:5px;"><p class="contentSectionTitle1_span">Cyberwar Violence Events done against NicerEnterprises over it's <a href="/geopolitics" class="nomod noPushState" target="naGeoPolitics" color="lime">GeoPolitical Activities</a>.</p></h1>
    <div style="width:40%;color:black;background:rgba(250, 233, 52,0.35);font-size:120%;margin:10px;font-weight:bold;padding:8px;border-radius:10px;text-shadow:0px 0px 3px rgba(255,0,0,0.7);box-shadow:0px 0px 8px 4px rgba(0,0,0,0.666), 2px 2px 2px rgba(0,0,0,0.7);">
        <p style="background:none;">
            <ul>
                <li>2025-05-27(Tuesday), 03:32CEST : While debugging my own na.site.loadContent() for v5.8.z, I realize now that some of my 'cyberwar problems' in the long distant and lesser distant past have been (at least in part) the result of my own <a href="https://en.wikipedia.org/wiki/Occupational_burnout" target="wikiBurnout" class="nomod noPushState" style="color:white">Occupational burnout</a> medical condition, combined with long stretches of coding work triggering that conditon once again. But I have seen some *very* weird behavior done most likely by intelligence staff that keeps detailed profiles about me because of my geoplitical activism, happen on my webservers over the years, also while sober -I'm not drunk often AT ALL, really!- and not all that sleepdeprived, so the address to the CIA.gov and AIVD.NL was not entirely unjustified I think.<br/>
                It will stick, stay online, right here on this front page, FOREVER. As a deterrence. :-)</li>
                </li>
                <li>2025-05-22(Thursday), 02:00CEST : Cyberwar problems seem to be behind me for now, in part no doubt to adjustments I made in my <a  class="nomod noPushState" target="gp1b" style="color:yellow;" href="https://x.com/ReneVeerma64021/status/1925345469883953408">geopolitical</a> <a class="nomod noPushState" target="gp1b" style="color:yellow;" href="https://www.usmessageboard.com/threads/the-dems-and-republicans-in-league-with-eachother-to-destroy-the-world-on-behalf-of-us-interests-i-think.1161506/post-36742697">"ramblings"</a> ;-)</li>
                </li>
                <li>2025-03-19(Wednesday) : Someone is preventing me from re-installing my fastest-hardware machine (parakeet) back home, AND from displaying the 11 to 12-thousand background wallpapers that I can run on / for this website!<br/>
                I suspect the CIA.GOV or AIVD.NL to be behind this!
                </li>
            </ul>
        </p>
    </div>
    -->


