



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>dc-js/dc.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="dc-js/dc.js" name="twitter:title" /><meta content="dc.js - Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/6378965?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/6378965?v=2&amp;s=400" property="og:image" /><meta content="dc-js/dc.js" property="og:title" /><meta content="https://github.com/dc-js/dc.js" property="og:url" /><meta content="dc.js - Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="500C3733:3B44:30957429:543418FE" name="octolytics-dimension-request_id" /><meta content="2007150" name="octolytics-actor-id" /><meta content="AntoineGa" name="octolytics-actor-login" /><meta content="60c042a6f3356a7067477468af89914d604d170702a3e0c9bf6c402b7dceba27" name="octolytics-actor-hash" />
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="0K8rn0ZEWN/Qei1PFTIwXV5oru+ESrupqHphswO3HukmepEFb99VNQISwnaOrDN02Qn8lsIRJ1+EfCUj/bReQA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-d869cc784f2cce0181af6b0c8b72679afe6a9c75.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-9ae9325bdf8dd21253fde438acbd4e158d45b029.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="be049ac64248e475594a1e36f3e6bc77">

      
  <meta name="description" content="dc.js - Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js">
  <meta name="go-import" content="github.com/dc-js/dc.js git https://github.com/dc-js/dc.js.git">

  <meta content="6378965" name="octolytics-dimension-user_id" /><meta content="dc-js" name="octolytics-dimension-user_login" /><meta content="4714614" name="octolytics-dimension-repository_id" /><meta content="dc-js/dc.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4714614" name="octolytics-dimension-repository_network_root_id" /><meta content="dc-js/dc.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/dc-js/dc.js/commits/master.atom" rel="alternate" title="Recent Commits to dc.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/dc-js/dc.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/dc-js/dc.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/AntoineGa" data-ga-click="Header, go to profile, text:username">
      <img alt="Antoine" class="avatar" data-user="2007150" height="20" src="https://avatars0.githubusercontent.com/u/2007150?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">AntoineGa</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="dc-js/dc.js">This repository</span>
    </li>
      <li>
        <a href="/dc-js/dc.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+1PhOKdOezHPJ+qrDawZPrrWDMZOZoYlZcmCoL53YjafVl67hwLzP1uiEvXiKTGx9n0YUKXTxMPS7Ay5ZT3hJA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="97b1Uf0lXiyXy0KCLkS06aNljNgYlkOVznD0oXw8SKECqfm9axgFRy7J7eUWrq/Tdogtx4/oogK4/CupsTp9/w==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4714614" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/dc-js/dc.js/watchers">
        222
      </a>
      <a href="/dc-js/dc.js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/dc-js/dc.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0YsL0hHBWgIKzB9gyeqTKhTBR08QLqUnaOxQAsCbQYl5v/aaJ4PoT/bNjMTQtVBS0wGb9qOcCCMIYjJTFdrQag==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar dc-js/dc.js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/dc-js/dc.js/stargazers">
          3,281
        </a>
</form>
    <form accept-charset="UTF-8" action="/dc-js/dc.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="l8SpsbN0E7Q5czJqlCPMD5JR6bbQQ3gP3IlYKBBjrSbl+5fHoJolJVG/VGziZOr8aJyhHRp9jOOqIiOlWSXCJg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star dc-js/dc.js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/dc-js/dc.js/stargazers">
          3,281
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/dc-js/dc.js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of dc-js/dc.js to your account" aria-label="Fork your own copy of dc-js/dc.js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/dc-js/dc.js/network" class="social-count">730</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/dc-js" class="url fn" itemprop="url" rel="author"><span itemprop="title">dc-js</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/dc-js/dc.js" class="js-current-repository js-repo-home-link">dc.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/dc-js/dc.js/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/dc-js/dc.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /dc-js/dc.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/dc-js/dc.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /dc-js/dc.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/dc-js/dc.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /dc-js/dc.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/dc-js/dc.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /dc-js/dc.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/dc-js/dc.js/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /dc-js/dc.js/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/dc-js/dc.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /dc-js/dc.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/dc-js/dc.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/dc-js/dc.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:dc-js/dc.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:dc-js/dc.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/dc-js/dc.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/dc-js/dc.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/dc-js/dc.js" class="minibutton sidebar-button" title="Save dc-js/dc.js to your computer and use it in GitHub Desktop." aria-label="Save dc-js/dc.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/dc-js/dc.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of dc-js/dc.js as a zip file"
                   title="Download the contents of dc-js/dc.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      <p>Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js</p>
    </div>



</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/dc-js/dc.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              1,486
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/dc-js/dc.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            5
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/dc-js/dc.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            23
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/dc-js/dc.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      53
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/dc-js/dc.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">93.5%</span>
              </a>
          </li>
          <li>
              <a href="/dc-js/dc.js/search?l=css">
                <span class="color-block language-color" style="background-color:#563d7c;"></span>
                <span class="lang">CSS</span>
                <span class="percent">6.2%</span>
              </a>
          </li>
          <li>
              <span class="other">
                <span data-lang="Other" class="color-block language-color"></span>
                <span class="lang">Other</span>
                <span class="percent">0.3%</span>
              </span>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#ccc">
  <span class="language-color" style="width:93.5%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span><span class="language-color" style="width:6.2%; background-color:#563d7c;" itemprop="keywords">CSS</span><span class="language-color" style="width:0.3%; background-color:#ccc;" itemprop="keywords">Other</span>
    </a>
  </div>

<div class="js-deferred-content"
  data-url="/dc-js/dc.js/show_partial?partial=recently_touched_branches_list">
</div>

<div class="file-navigation in-mid-page">
  <a href="/dc-js/dc.js/find/master"
        class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/dc-js/dc.js/compare" aria-label="Compare, review, create a pull request" class="minibutton primary tooltipped tooltipped-s left compare-button" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/gh-pages"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/require-1.7.0"
                 data-name="require-1.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="require-1.7.0">require-1.7.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/scatter-symbols"
                 data-name="scatter-symbols"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="scatter-symbols">scatter-symbols</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v1.6.x"
                 data-name="v1.6.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.6.x">v1.6.x</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v1.4.0"
                 data-name="v1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.4.0">v1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v1.3"
                 data-name="v1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3">v1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v1.2"
                 data-name="v1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2">v1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v1.1"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v1.0"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v0.9.1"
                 data-name="v0.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.1">v0.9.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v0.9"
                 data-name="v0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9">v0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v0.8"
                 data-name="v0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.8">v0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v0.7.1"
                 data-name="v0.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.1">v0.7.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v0.7.0"
                 data-name="v0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.0">v0.7.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/v0.6.0"
                 data-name="v0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.0">v0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/2.0.0-alpha.2"
                 data-name="2.0.0-alpha.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0-alpha.2">2.0.0-alpha.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/2.0.0-alpha"
                 data-name="2.0.0-alpha"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0-alpha">2.0.0-alpha</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/1.7.1"
                 data-name="1.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.1">1.7.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/1.7.0"
                 data-name="1.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.0">1.7.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/1.6.0"
                 data-name="1.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.0">1.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/1.5.0"
                 data-name="1.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.0">1.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/1.3.0"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/0.5.0"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/0.4.0"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/0.3.0"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/0.2.0"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dc-js/dc.js/tree/0.1.0"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/dc-js/dc.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dc.js</span></a></span></span><span class="separator"> / </span><form action="/dc-js/dc.js/new/master" aria-label="Fork this project and create a new file" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Fork this project and create a new file" class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/dc-js/dc.js/commit/6b8d7b1485a6863e7e47b71ce7a0e2661cd31580" class="message" data-pjax="true" title="artifacts and stock fixture">artifacts and stock fixture</a>
        
    </p>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="6b8d7b1485a6863e7e47b71ce7a0e2661cd31580" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/dc-js/dc.js/commit/6b8d7b1485a6863e7e47b71ce7a0e2661cd31580" class="sha-block" data-pjax>latest commit <span class="sha">6b8d7b1485</span></a>

      <div class="authorship">
        <img alt="Gordon Woodhull" class="avatar" data-user="1366709" height="20" src="https://avatars0.githubusercontent.com/u/1366709?v=2&amp;s=40" width="20" />
        <span class="author-name"><a href="/gordonwoodhull" rel="contributor">gordonwoodhull</a></span>
        authored <time class="updated" datetime="2014-09-29T03:43:08Z" is="relative-time">Sep 28, 2014</time>

      </div>
    </div>
  </div>

  <div class="file-wrap">
    <table class="files" data-pjax>

      <tbody class=""
  data-url="/dc-js/dc.js/file-list/master"
  data-deferred-content-error="Failed to load latest commit information.">

    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/tree/master/docs" class="js-directory-link" id="e3e2a9bfd88566b05001b02a3f51d286-7f7f150fcd9ceee89efbc847ec44751a8a9b4a6a" title="docs">docs</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/2e89d635a5c2a83baac95fb731da758fc73ea4ac" class="message" data-pjax="true" title="update comments with better understanding

and check in a log (commented out) that may help
to figure out the false positives

remove wrong fix for false positives">update comments with better understanding</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-07-20T09:23:22Z" is="time-ago">Jul 20, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/tree/master/regression" class="js-directory-link" id="c735ca28f98e533a5534dab7927509d8-03c0a4a5a3b7d19adc37a07ebe7c2de6480e34e8" title="regression">regression</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/6b8d7b1485a6863e7e47b71ce7a0e2661cd31580" class="message" data-pjax="true" title="artifacts and stock fixture">artifacts and stock fixture</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T03:43:08Z" is="time-ago">Sep 28, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/tree/master/scripts" class="js-directory-link" id="d6c5855a62cf32a4dadbc2831f0f295f-693be8df271c6067c2355e62b346a0fd84f9c139" title="scripts">scripts</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/a1d6bb24b7601823783fdfc54d1e0d671516173a" class="message" data-pjax="true" title="Removed vows, stock regression test almost working">Removed vows, stock regression test almost working</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-03-04T17:46:01Z" is="time-ago">Mar 4, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/tree/master/spec" class="js-directory-link" id="b979c2934ac0b4ba3f08dabfdd1b2299-35b02939a5f242c69ca7ded4c08d3c1a69a582c4" title="spec">spec</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/1297923a9d24179d3cfefe8c616ad4f29536b917" class="message" data-pjax="true" title="bring code in line with coding conventions

- break tests into describe(noun) it(verbs)
- indentation etc as mandated by jscs/jshint
- remove testing examples from stock.js and keep the most general one
- remove header from index.html because header is generated now">bring code in line with coding conventions</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T03:37:10Z" is="time-ago">Sep 28, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/tree/master/src" class="js-directory-link" id="25d902c24283ab8cfbac54dfa101ad31-bda7b47a22f0a673bc04b6cce3660b252c4b1958" title="src">src</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/1297923a9d24179d3cfefe8c616ad4f29536b917" class="message" data-pjax="true" title="bring code in line with coding conventions

- break tests into describe(noun) it(verbs)
- indentation etc as mandated by jscs/jshint
- remove testing examples from stock.js and keep the most general one
- remove header from index.html because header is generated now">bring code in line with coding conventions</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T03:37:10Z" is="time-ago">Sep 29, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/tree/master/web" class="js-directory-link" id="2567a5ec9705eb7ac2c984033e06189d-694ee68cd3dc5a56b5968d2fe95f7246574c5f6b" title="web">web</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/6b8d7b1485a6863e7e47b71ce7a0e2661cd31580" class="message" data-pjax="true" title="artifacts and stock fixture">artifacts and stock fixture</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T03:43:08Z" is="time-ago">Sep 29, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-45e9be8fff514eaace5c553bc4c19285ffdb4c57" title=".gitignore">.gitignore</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/090dae1197d1f0a4bd77d2fa731d6a1e8ee596aa" class="message" data-pjax="true" title="Introduced `grunt server` devel workflow: jasmine at localhost:8888/spec">Introduced `grunt server` devel workflow: jasmine at localhost:8888/spec</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-03-07T22:32:30Z" is="time-ago">Mar 7, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/.jscsrc" class="js-directory-link" id="e5b8cacefa8c329daed4f4b628f72e61-ac86cc9c3388a86167fcbaa0c394b24031f666fc" title=".jscsrc">.jscsrc</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/2767c8ae8c10a3a531326e0064a1a66be3924443" class="message" data-pjax="true" title="JSHint indentation has been deprecated in this version, use JSCS instead.  Synced latest JSCS options">JSHint indentation has been deprecated in this version, use JSCS inst…</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-08-23T02:14:41Z" is="time-ago">Aug 22, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/.jshintrc" class="js-directory-link" id="4d5aa81bf4f18104bb6ea53a8b5d1f43-0dcf3b5f8eafead1de8b43806b9e8073a696e5cc" title=".jshintrc">.jshintrc</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/2767c8ae8c10a3a531326e0064a1a66be3924443" class="message" data-pjax="true" title="JSHint indentation has been deprecated in this version, use JSCS instead.  Synced latest JSCS options">JSHint indentation has been deprecated in this version, use JSCS inst…</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-08-23T02:14:41Z" is="time-ago">Aug 23, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/.mailmap" class="js-directory-link" id="c9d540715cff3469b65ddd01f614848b-1c75896b692262ff5a38026dde48d82017b1d409" title=".mailmap">.mailmap</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/b546dabb9196f814368c609ccd47feae8ee3f1f6" class="message" data-pjax="true" title="more authors">more authors</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2013-09-30T22:27:31Z" is="time-ago">Sep 30, 2013</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/.travis.yml" class="js-directory-link" id="354f30a63fb0907d4ad57269548329e3-c432f3e11510522b1c383a244875aff9eae6803c" title=".travis.yml">.travis.yml</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/16e686300158c199f7aea08851040185e6acaed7" class="message" data-pjax="true" title="Do not attempt to connect to opensauce for external pull requests">Do not attempt to connect to opensauce for external pull requests</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-04-02T04:05:17Z" is="time-ago">Apr 1, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/AUTHORS" class="js-directory-link" id="3d350169560e75d0cf9fc8e3574a3639-c210a2df6e4ee04c88ab02ed45cac095d1a80b86" title="AUTHORS">AUTHORS</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/d5cd4f29002a768f7f5474f8173fcd95e9e4734f" class="message" data-pjax="true" title="add PR #668 authors">add PR</a> <a href="https://github.com/dc-js/dc.js/pull/668" class="issue-link" title="Adding tests and revisions to PR #560 : Provide programmatic column header for table, stock example updated ">#668</a> <a href="/dc-js/dc.js/commit/d5cd4f29002a768f7f5474f8173fcd95e9e4734f" class="message" data-pjax="true" title="add PR #668 authors">authors</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T03:39:57Z" is="time-ago">Sep 28, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/CONTRIBUTING.md" class="js-directory-link" id="6a3371457528722a734f3c51d9238c13-7ebc28d624991649de2629d8db1c26f1d8203934" title="CONTRIBUTING.md">CONTRIBUTING.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/337fa409f1db875806efb6135a75ab550b8c2330" class="message" data-pjax="true" title="Update CONTRIBUTING.md">Update CONTRIBUTING.md</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-28T21:03:50Z" is="time-ago">Sep 28, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/Gruntfile.js" class="js-directory-link" id="35b4a816e0441e6a375cd925af50752c-2ef8b805f54d9b5474f3abbd79c3e61c09f873bc" title="Gruntfile.js">Gruntfile.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/6afe2afad6828bfb8162e1980bb539b27a2d031e" class="message" data-pjax="true" title="Revert &quot;temporarily hard-code test-stock-example:diff to see why it&#39;s failing in travis only&quot;

i.e. stop always printing the diff (it is unpleasant when running locally)

This reverts commit 3830642c6d563964d2687e815ebfa38ddf94a8d7.">Revert "temporarily hard-code test-stock-example:diff to see why it's…</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T00:02:03Z" is="time-ago">Sep 28, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/LICENSE" class="js-directory-link" id="9879d6db96fd29134fc802214163b95a-261eeb9e9f8b2b4b0d119366dda99c6fd7d35c64" title="LICENSE">LICENSE</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/86ac404c625f43e0bfe457b9555d6e3ee49748f0" class="message" data-pjax="true" title="added license">added license</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2012-07-12T19:22:11Z" is="time-ago">Jul 12, 2012</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-5e5459fd86fa9287929f37d465947022c36769b8" title="README.md">README.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/ea9fa4be904355829d52ea0534a76c0953344b3f" class="message" data-pjax="true" title="put github cdn warning on wiki">put github cdn warning on wiki</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-06-17T20:42:03Z" is="time-ago">Jun 17, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-d1cecde6a2ff9ac6e86c31702e0ebd4a4a795bee" title="bower.json">bower.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/67e65e8f562d82688b7e233ccd74084d09b2388c" class="message" data-pjax="true" title="2.0 alpha.2

artifacts match tags">2.0 alpha.2</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-08-01T05:48:26Z" is="time-ago">Aug 1, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/dc.css" class="js-directory-link" id="38c031a294722a2e1dd3c13af6c5f61a-ffd4b13ab6060346424cae03d3786372fb860d23" title="dc.css">dc.css</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/4c696068fdc83602126920cf89cb332b3a37f682" class="message" data-pjax="true" title="fix issue of pie chart being invisible when total group value is 0">fix issue of pie chart being invisible when total group value is 0</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2013-11-23T21:34:28Z" is="time-ago">Nov 23, 2013</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/dc.js" class="js-directory-link" id="03679e3c22a2b93d903559f479443e54-d6ab25be5cd1e0cf3766f65d8c4955ef9272a16e" title="dc.js">dc.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/1297923a9d24179d3cfefe8c616ad4f29536b917" class="message" data-pjax="true" title="bring code in line with coding conventions

- break tests into describe(noun) it(verbs)
- indentation etc as mandated by jscs/jshint
- remove testing examples from stock.js and keep the most general one
- remove header from index.html because header is generated now">bring code in line with coding conventions</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T03:37:10Z" is="time-ago">Sep 29, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/dc.min.js" class="js-directory-link" id="01f44e61f86bb2e127b02686373b3537-685b3bb336aa6d8ac41e7fdb8177eb153c1e1734" title="dc.min.js">dc.min.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/e2c9a7eda5789e9100eeef54857290a16b36ae4a" class="message" data-pjax="true" title="Merge PR #668">Merge PR</a> <a href="https://github.com/dc-js/dc.js/pull/668" class="issue-link" title="Adding tests and revisions to PR #560 : Provide programmatic column header for table, stock example updated ">#668</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T02:44:42Z" is="time-ago">Sep 28, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/dc.min.js.map" class="js-directory-link" id="5154801788fd0a3cb84d9503415abf57-3ae53b82b1b6c4ef691ae13cb4b09e8c53e31e97" title="dc.min.js.map">dc.min.js.map</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/1297923a9d24179d3cfefe8c616ad4f29536b917" class="message" data-pjax="true" title="bring code in line with coding conventions

- break tests into describe(noun) it(verbs)
- indentation etc as mandated by jscs/jshint
- remove testing examples from stock.js and keep the most general one
- remove header from index.html because header is generated now">bring code in line with coding conventions</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-29T03:37:10Z" is="time-ago">Sep 29, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/index.js" class="js-directory-link" id="168726dbe96b3ce427e7fedce31bb0bc-d56a35c978477fdffae8d020e337fbf85dd127df" title="index.js">index.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/f7d3c98578ba85c3f6894ca6f58b6726fcc636a6" class="message" data-pjax="true" title="update module.exports for browserify compatability">update module.exports for browserify compatability</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-08-16T19:25:36Z" is="time-ago">Aug 16, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/dc-js/dc.js/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-f631f33b70c473ae5668cc50900c0a97cf699eef" title="package.json">package.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/dc-js/dc.js/commit/2097dc13faff910d0a0ee543809176d483ff7fc2" class="message" data-pjax="true" title="Merge pull request #680

Conflicts:
	package.json
	src/base-mixin.js
	src/heatmap.js
	src/line-chart.js
	src/scatter-plot.js">Merge pull request</a> <a href="https://github.com/dc-js/dc.js/pull/680" class="issue-link" title="Added JSCS and extended JShint options for a more consistent codebase">#680</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-09-28T20:06:16Z" is="time-ago">Sep 28, 2014</time></span>
      </td>
    </tr>
</tbody>

    </table>
  </div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><p><a href="http://travis-ci.org/dc-js/dc.js"><img src="https://camo.githubusercontent.com/26cdb0ddb76c68220338634aa05908dd1161b233/68747470733a2f2f6170692e7472617669732d63692e6f72672f64632d6a732f64632e6a732e706e673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://api.travis-ci.org/dc-js/dc.js.png?branch=master" style="max-width:100%;"></a>
<a href="https://saucelabs.com/u/sclevine"><img src="https://camo.githubusercontent.com/4ad567797c4179efb27cea126003d3be847d6ba1/68747470733a2f2f73617563656c6162732e636f6d2f6275696c647374617475732f73636c6576696e65" alt="Sauce Status" data-canonical-src="https://saucelabs.com/buildstatus/sclevine" style="max-width:100%;"></a>
<a href="http://badge.fury.io/js/dc"><img src="https://camo.githubusercontent.com/0be1eab8a5d57311bfe1948df01ccd12e865de62/68747470733a2f2f62616467652e667572792e696f2f6a732f64632e706e67" alt="NPM Status" data-canonical-src="https://badge.fury.io/js/dc.png" style="max-width:100%;"></a></p>

<h1>
<a name="user-content-dcjs" class="anchor" href="#dcjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>dc.js</h1>

<p>Dimensional charting built to work natively with crossfilter rendered using d3.js. Check out the
<a href="http://dc-js.github.com/dc.js/">example page</a> with a quick five minutes how to guide. For a
detailed <a href="https://github.com/dc-js/dc.js/blob/master/web/docs/api-1.6.0.md">API reference</a> and
more please visit the <a href="https://github.com/dc-js/dc.js/wiki">Wiki</a>.</p>

<h2>
<a name="user-content-cdn-location" class="anchor" href="#cdn-location" aria-hidden="true"><span class="octicon octicon-link"></span></a>CDN location</h2>

<pre><code>http://cdnjs.cloudflare.com/ajax/libs/dc/1.7.0/dc.js
http://cdnjs.cloudflare.com/ajax/libs/dc/1.7.0/dc.min.js
http://cdnjs.cloudflare.com/ajax/libs/dc/1.7.0/dc.css
</code></pre>

<p>Please do not use github.io as a CDN unless you need the bleeding-edge features.</p>

<p><a href="https://github.com/dc-js/dc.js/wiki#cdn-location">More info on the Wiki.</a></p>

<h2>
<a name="user-content-install-with-npm" class="anchor" href="#install-with-npm" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install with npm</h2>

<pre><code>npm install dc
</code></pre>

<h2>
<a name="user-content-install-without-npm" class="anchor" href="#install-without-npm" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install without npm</h2>

<p>Download</p>

<ul class="task-list">
<li><a href="https://github.com/mbostock/d3">d3.js</a></li>
<li><a href="https://github.com/square/crossfilter">crossfilter.js</a></li>
<li><a href="https://github.com/dc-js/dc.js/releases">dc.js - stable</a></li>
<li><a href="https://github.com/dc-js/dc.js">dc.js - bleeding edge (master)</a></li>
</ul><h2>
<a name="user-content-how-to-build-dcjs-locally" class="anchor" href="#how-to-build-dcjs-locally" aria-hidden="true"><span class="octicon octicon-link"></span></a>How to build dc.js locally</h2>

<h3>
<a name="user-content-prerequisite-modules" class="anchor" href="#prerequisite-modules" aria-hidden="true"><span class="octicon octicon-link"></span></a>Prerequisite modules</h3>

<p>Make sure the following packages are installed on your machine</p>

<ul class="task-list">
<li>node.js</li>
<li>npm</li>
</ul><h3>
<a name="user-content-install-dependencies" class="anchor" href="#install-dependencies" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install dependencies</h3>

<pre><code>dc.js$ npm install
</code></pre>

<h3>
<a name="user-content-build-and-test" class="anchor" href="#build-and-test" aria-hidden="true"><span class="octicon octicon-link"></span></a>Build and Test</h3>

<pre><code>dc.js$ grunt test
</code></pre>

<h2>
<a name="user-content-developing-dcjs" class="anchor" href="#developing-dcjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Developing dc.js</h2>

<h3>
<a name="user-content-start-the-development-server" class="anchor" href="#start-the-development-server" aria-hidden="true"><span class="octicon octicon-link"></span></a>Start the development server</h3>

<pre><code>dc.js$ grunt server
</code></pre>

<ul class="task-list">
<li>Jasmine specs are hosted at http://localhost:8888/spec</li>
<li>The stock example is at http://localhost:8888/web</li>
<li>More examples are at http://localhost:8888/web/examples</li>
</ul><h2>
<a name="user-content-license" class="anchor" href="#license" aria-hidden="true"><span class="octicon octicon-link"></span></a>License</h2>

<p>dc.js is an open source javascript library and licensed under
<a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License v2</a>.</p></article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06502s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-8827b83f56326279c38cb436d8477471e04c6632.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-00bea7823bc38eafe7970e690a19d26d3a801739.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

