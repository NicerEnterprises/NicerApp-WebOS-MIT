<meta name="description" content="Take a video or (tiled) background of any resolution, and project information onto that using any weblanguage you want. Written in a style simple enough for children to learn from.">
<?php
    require_once(realpath(dirname(__FILE__).'/../../boot.php'));
    global $naWebOS;
    global $naURLs;
    //$src = $naWebOS->basePath.'/NicerAppWebOS/domainConfigs/'.$naWebOS->domainFolder.'/pageHeader.php'; echo $src; var_dump(file_exists($src)); exit();
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


    <div style="width:40%;margin:8px;padding:8px;border-radius:5px;background:rgba(250, 233, 52,0.35);box-shadow:0px 0px 8px 4px rgba(0,0,0,0.631), 2px 2px 2px rgba(0,0,0,0.7);line-height:1.5em;">
        <blockquote style="background:rgba(0,0,0,0.55);padding:8px;border-radius:5px;">
        Take a video or (tiled) background of any resolution, and <a href="https://youtube.com/@Gavan-NL" class="nomod noPushState" target="fiveDotEightVids">project information</a> onto that using any weblanguage you want.<br/>
        Written in a style simple enough for children to learn from.<br/>
        Best viewed in Chrome, Chromium based browsers or FireFox or Edge.
        </blockquote>
        <p>
        This is the <a href="https://github.com/NicerEnterprises/NicerApp-WebOS-MIT" class="contentSectionTitle3_a1 nomod noPushState" target="NicerEnterprises---NicerApp-WebOS---on---GitHub-dot-com"><span class="contentSectionTitle3_a1" style="box-shadow:none; padding:0px;margin:0px;">5th major version, 5.8.0-alpha001d to be exact</span></a> of this software.
        </p>
        <p>
        You should disable your VPN (if you can), or at least for this website. VPNs significantly reduce loading speed for websites like these, rich in graphics and client-side user-interface code.
        </p>
    </div>

    <h1 class="contentSectionTitle1">Apps offered on this NicerApp WebOS homepage :</h1>
    <h3 class="contentSectionTitle3"><a href="<?php echo $naURLs['music'];?>" class="contentSectionTitle3_a">Music</a></h3>
    <span style="background:rgba(0,0,0,0.55);margin:10px;padding:8px;border-radius:5px;">All music pages are currently offline pending bugfixes for the 2D and 3D musicPlayer aka mediaPlayer app.</span>

    <h3 id="h3_news" class="contentSectionTitle3 contentSectionTitle3_darker">News</h3>
    <span style="background:rgba(0,0,0,0.55);padding:8px;margin:10px;border-radius:5px;">All news pages are currently offline pending bugfixes for the na.site.loadContent() set of functions.</span>
    <ul class="index" style="margin-block-end:33px;">
        <li><a href="<?php echo $naURLs['newsHeadlines_englishNews'];?>" class="contentSectionTitle3_a">English News</a></li>
        <li><a href="<?php echo $naURLs['newsHeadlines_englishNews_worldHeadlines'];?>" class="contentSectionTitle3_a">English News : World Headlines only</a></li>
        <li><a href="/business-news" class="contentSectionTitle3_a">English Business News</a></li>
        <li><a href="<?php echo $naURLs['newsHeadlines_nederlandsNieuws'];?>" class="contentSectionTitle3_a">Nederlands Nieuws</a></li>
        <li><a href="<?php echo $naURLs['newsHeadlines_nederlandsNieuws_wereldNieuws'];?>" class="contentSectionTitle3_a">Nederlands Nieuws : Internationale Headlines</a></li>
        <li><a href="<?php echo $naURLs['newsHeadlines_deutscheNachrichten'];?>" class="contentSectionTitle3_a">Deutsche Nachrichten</a></li>
        <li><a href="<?php echo $naURLs['newsHeadlines_arabic'];?>" class="contentSectionTitle3_a">Arabic Business News (in English)</a></li>
    </ul>
    
    <h3 class="contentSectionTitle3"><a href="<?php echo $naURLs['tarot'];?>" class="contentSectionTitle3_a">Tarot cardgame</a></h3>

    <h3 class="contentSectionTitle3"><a href="https://said.by" class="contentSectionTitle3_a" target="saidBy">Blogging features (on https://said.by)</a></h3>
    
    <h3 class="contentSectionTitle3"><a href="https://zoned.at" target="zonedAt" class="contentSectionTitle3_a">URL redirection (on https://zoned.at)</a></h3>

    <h3 class="contentSectionTitle3"><a href="/wiki/frontpage" class="contentSectionTitle3_a">Wikipedia.org view</a></h3>

    <h2 class="contentSectionTitle2">Demos</h2>
    <h3 class="contentSectionTitle3"><a href="<?php echo $naURLs['3Dcube'];?>" class="contentSectionTitle3_a">3D demo : cube</a></h3>
    <h3 class="contentSectionTitle3"><a href="<?php echo $naURLs['3Dmodels'];?>" class="contentSectionTitle3_a">3D demo : loading of models (slow to start up)</a></h3>
    <h3 class="contentSectionTitle3"><a href="<?php echo $naURLs['backgroundsBrowser'];?>" class="contentSectionTitle3_a">3D file explorer</a></h3>

    <h2 class="contentSectionTitle2">Administrative features</h2>
    <h3 class="contentSectionTitle3"><a href="/filePhoenix" class="contentSectionTitle3_a">NicerEnterprises FilePhoenix</a></h3>
<?php 
    global $naLAN; 
    if ($naLAN) { 
?>
    <h3 class="contentSectionTitle3"><a href="<?php echo $naURLs['analytics'];?>" class="contentSectionTitle3_a">Analytics</a></h3>
    <h3 class="contentSectionTitle3"><a href="/view/logs" class="contentSectionTitle3_a">Logs</a></h3>
<?php } ?>

    <h1 class="contentSectionTitle1" style="width:40%;">NicerEnterprises Company Profile</h1>
    <div style="width:40%;margin:8px;padding:8px;border-radius:5px;background:rgba(250, 233, 52,0.35);box-shadow:0px 0px 8px 4px rgba(0,0,0,0.631), 2px 2px 2px rgba(0,0,0,0.7);line-height:1.5em">
        <p style="background:none;">
        <a href="https://nicer.app" target="naHP">https://nicer.app</a>, <a href="https://said.by" target="sbHP">https://said.by</a>, <a href="https://zoned.at" target="zAt">https://zoned.at</a>, <a href="https://github.com/NicerEnterprises" target="githubNicerEnterprises">https://github.com/NicerEnterprises</a>, in addition to ALL of the content listed on and/or hosted by the cloudhosting service companies, online forums and social media accounts that I use (or have ever used), are ENTIRELY
        Copyrighted (C) and Owned by <a href="mailto:rene.veerman.netherlands@gmail.com" target="_new" class="nomod noPushState">Rene A.J.M. Veerman &lt;rene.veerman.netherlands@gmail.com&gt;</a>.<br/>
        </p>

        <p style="background:none;"><a href="https://x.com/ReneVeerma64021">https://x.com/ReneVeerma64021</a>.</p>
    </div>


