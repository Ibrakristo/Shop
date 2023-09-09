import * as cheerio from 'cheerio'

let $ = cheerio.load(`
<!DOCTYPE html>
<html class=" responsive" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
			<meta name="viewport" content="width=device-width,initial-scale=1">
		<meta name="theme-color" content="#171a21">
		<title>Steam Search</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

	
	
	<link href="https://store.cloudflare.steamstatic.com/public/shared/css/motiva_sans.css?v=2C1Oh9QFVTyK&amp;l=english&amp;_cdn=cloudflare" rel="stylesheet" type="text/css" >
<link href="https://store.cloudflare.steamstatic.com/public/shared/css/shared_global.css?v=J_zoQCW_lvhB&amp;l=english&amp;_cdn=cloudflare" rel="stylesheet" type="text/css" >
<link href="https://store.cloudflare.steamstatic.com/public/shared/css/buttons.css?v=hFJKQ6HV7IKT&amp;l=english&amp;_cdn=cloudflare" rel="stylesheet" type="text/css" >
<link href="https://store.cloudflare.steamstatic.com/public/css/v6/store.css?v=puR1wGxH7wln&amp;l=english&amp;_cdn=cloudflare" rel="stylesheet" type="text/css" >
<link href="https://store.cloudflare.steamstatic.com/public/css/v6/browse.css?v=wWw5tW1y7nea&amp;l=english&amp;_cdn=cloudflare" rel="stylesheet" type="text/css" >
<link href="https://store.cloudflare.steamstatic.com/public/css/v6/search.css?v=dqJ5BRLcNMj5&amp;l=english&amp;_cdn=cloudflare" rel="stylesheet" type="text/css" >
<link href="https://store.cloudflare.steamstatic.com/public/shared/css/shared_responsive.css?v=CG8Em6e-Ozq3&amp;l=english&amp;_cdn=cloudflare" rel="stylesheet" type="text/css" >
<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/shared/javascript/jquery-1.8.3.min.js?v=.TZ2NKhB-nliU&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>
<script type="text/javascript">$J = jQuery.noConflict();</script><script type="text/javascript">VALVE_PUBLIC_PATH = "https:\/\/store.cloudflare.steamstatic.com\/public\/";</script><script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/shared/javascript/tooltip.js?v=.zYHOpI1L3Rt0&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>

<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/shared/javascript/shared_global.js?v=joUly9uZoJX_&amp;l=english&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>

<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/javascript/main.js?v=DjYWOA4Fgl3Y&amp;l=english&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>

<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/javascript/dynamicstore.js?v=zT0Cl5vv5AfQ&amp;l=english&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>

<script type="text/javascript">
	var __PrototypePreserve=[];
	__PrototypePreserve[0] = Array.from;
	__PrototypePreserve[1] = Array.prototype.filter;
	__PrototypePreserve[2] = Array.prototype.flatMap;
	__PrototypePreserve[3] = Array.prototype.find;
	__PrototypePreserve[4] = Array.prototype.some;
	__PrototypePreserve[5] = Function.prototype.bind;
	__PrototypePreserve[6] = HTMLElement.prototype.scrollTo;
</script>
<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/javascript/prototype-1.7.js?v=.a38iP7Khdmyy&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>
<script type="text/javascript">
	Array.from = __PrototypePreserve[0] || Array.from;
	Array.prototype.filter = __PrototypePreserve[1] || Array.prototype.filter;
	Array.prototype.flatMap = __PrototypePreserve[2] || Array.prototype.flatMap;
	Array.prototype.find = __PrototypePreserve[3] || Array.prototype.find;
	Array.prototype.some = __PrototypePreserve[4] || Array.prototype.some;
	Function.prototype.bind = __PrototypePreserve[5] || Function.prototype.bind;
	HTMLElement.prototype.scrollTo = __PrototypePreserve[6] || HTMLElement.prototype.scrollTo;
</script>
<script type="text/javascript">
	var __ScriptaculousPreserve=[];
	__ScriptaculousPreserve[0] = Array.from;
	__ScriptaculousPreserve[1] = Function.prototype.bind;
	__ScriptaculousPreserve[2] = HTMLElement.prototype.scrollTo;
</script>
<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/javascript/scriptaculous/_combined.js?v=Me1IBxzktiwk&amp;l=english&amp;_cdn=cloudflare&amp;load=effects,controls,slider&amp;_co_domain=1" ></script>
<script type="text/javascript">
	Array.from = __ScriptaculousPreserve[0] || Array.from;
	Function.prototype.bind = __ScriptaculousPreserve[1] || Function.prototype.bind;
	HTMLElement.prototype.scrollTo = __ScriptaculousPreserve[2] || HTMLElement.prototype.scrollTo;
</script>
<script type="text/javascript">Object.seal && [ Object, Array, String, Number ].map( function( builtin ) { Object.seal( builtin.prototype ); } );</script>
		<script type="text/javascript">
			document.addEventListener('DOMContentLoaded', function(event) {
				$J.data( document, 'x_readytime', new Date().getTime() );
				$J.data( document, 'x_oldref', GetNavCookie() );
				SetupTooltips( { tooltipCSSClass: 'store_tooltip'} );
		});
		</script><script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/shared/javascript/dselect.js?v=sjouo3-33Gox&amp;l=english&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>
<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/javascript/searchpage.js?v=HcOV6zjiN_eu&amp;l=english&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>
<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/javascript/jquery.filter.js?v=.UsxvqYeHZ01h&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>
<script type="text/javascript" src="https://store.cloudflare.steamstatic.com/public/shared/javascript/shared_responsive_adapter.js?v=pSvIAKtunfWg&amp;l=english&amp;_cdn=cloudflare&amp;_co_domain=1" ></script>

						<meta name="twitter:card" content="summary_large_image">
			
	<meta name="twitter:site" content="@steam" />

						<meta property="og:title" content="Steam Search">
					<meta property="twitter:title" content="Steam Search">
					<meta property="og:type" content="website">
					<meta property="fb:app_id" content="105386699540688">
					<meta property="og:site" content="Steam">
			
	
			<link rel="image_src" href="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/share_steam_logo.png">
		<meta property="og:image" content="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/share_steam_logo.png">
		<meta name="twitter:image" content="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/share_steam_logo.png" />
					<meta property="og:image:secure" content="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/share_steam_logo.png">
				
	
	
	
	
	</head>
<body class="v6 search_page responsive_page ">


<div class="responsive_page_frame with_header">
						<div class="responsive_page_menu_ctn mainmenu">
				<div class="responsive_page_menu"  id="responsive_page_menu">
										<div class="mainmenu_contents">
						<div class="mainmenu_contents_items">
															<a class="menuitem" href="https://store.steampowered.com/login/?redir=search%2F%3Ffilter%3Dtopsellers&redir_ssl=1&snr=1_7_7_7000_global-header">
									Login								</a>
								<a class="menuitem supernav supernav_active" href="https://store.steampowered.com/?snr=1_7_7_7000_global-responsive-menu" data-tooltip-type="selector" data-tooltip-content=".submenu_store">
		Store	</a>
	<div class="submenu_store" style="display: none;" data-submenuid="store">
		<a class="submenuitem" href="https://store.steampowered.com/?snr=1_7_7_7000_global-responsive-menu">Home</a>
					<a class="submenuitem" href="https://store.steampowered.com/explore/?snr=1_7_7_7000_global-responsive-menu">Discovery Queue</a>
				<a class="submenuitem" href="https://steamcommunity.com/my/wishlist/">Wishlist</a>
		<a class="submenuitem" href="https://store.steampowered.com/points/shop/?snr=1_7_7_7000_global-responsive-menu">Points Shop</a>	
       	<a class="submenuitem" href="https://store.steampowered.com/news/?snr=1_7_7_7000_global-responsive-menu">News</a>
					<a class="submenuitem" href="https://store.steampowered.com/stats/?snr=1_7_7_7000_global-responsive-menu">Stats</a>
					</div>


			<a class="menuitem supernav " style="display: block" href="https://steamcommunity.com/" data-tooltip-type="selector" data-tooltip-content=".submenu_community">
			Community		</a>
		<div class="submenu_community" style="display: none;" data-submenuid="community">
			<a class="submenuitem" href="https://steamcommunity.com/">Home</a>
			<a class="submenuitem" href="https://steamcommunity.com/discussions/">Discussions</a>
			<a class="submenuitem" href="https://steamcommunity.com/workshop/">Workshop</a>
			<a class="submenuitem" href="https://steamcommunity.com/market/">Market</a>
			<a class="submenuitem" href="https://steamcommunity.com/?subsection=broadcasts">Broadcasts</a>
											</div>
		

	
	
	<a class="menuitem " href="https://help.steampowered.com/en/">
		Support	</a>

							<div class="minor_menu_items">
																								<div class="menuitem change_language_action">
									Change language								</div>
																																	<div class="menuitem" onclick="Responsive_RequestDesktopView();">
										View desktop website									</div>
															</div>
						</div>
						<div class="mainmenu_footer_spacer  "></div>
						<div class="mainmenu_footer">
															<div class="mainmenu_footer_logo"><img src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/logo_valve_footer.png"></div>
								© Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.								<span class="mainmenu_valve_links">
									<a href="https://store.steampowered.com/privacy_agreement/?snr=1_7_7_7000_global-responsive-menu" target="_blank">Privacy Policy</a>
									&nbsp;| &nbsp;<a href="http://www.valvesoftware.com/legal.htm" target="_blank">Legal</a>
									&nbsp;| &nbsp;<a href="https://store.steampowered.com/subscriber_agreement/?snr=1_7_7_7000_global-responsive-menu" target="_blank">Steam Subscriber Agreement</a>
									&nbsp;| &nbsp;<a href="https://store.steampowered.com/steam_refunds/?snr=1_7_7_7000_global-responsive-menu" target="_blank">Refunds</a>
								</span>
													</div>
					</div>
									</div>
			</div>
		
		<div class="responsive_local_menu_tab"></div>

		<div class="responsive_page_menu_ctn localmenu">
			<div class="responsive_page_menu"  id="responsive_page_local_menu" data-panel="{&quot;onOptionsActionDescription&quot;:&quot;Filter&quot;,&quot;onOptionsButton&quot;:&quot;Responsive_ToggleLocalMenu()&quot;,&quot;onCancelButton&quot;:&quot;Responsive_ToggleLocalMenu()&quot;}">
				<div class="localmenu_content" data-panel="{&quot;maintainY&quot;:true,&quot;bFocusRingRoot&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}">
				</div>
			</div>
		</div>



					<div class="responsive_header">
				<div class="responsive_header_content">
					<div id="responsive_menu_logo">
						<img src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_menu_hamburger.png" height="100%">
											</div>
					<div class="responsive_header_logo">
						<a href="https://store.steampowered.com/?snr=1_7_7_7000_global-responsive-menu">
															<img src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png" height="36" border="0" alt="STEAM">
													</a>
					</div>
				</div>
			</div>
		
		<div class="responsive_page_content_overlay">

		</div>

		<div class="responsive_fixonscroll_ctn nonresponsive_hidden ">
		</div>
	
	<div class="responsive_page_content">

		<div id="global_header" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}">
	<div class="content">
		<div class="logo">
			<span id="logo_holder">
									<a href="https://store.steampowered.com/?snr=1_7_7_7000_global-header">
						<img src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" width="176" height="44">
					</a>
							</span>
		</div>

			<div class="supernav_container">
	<a class="menuitem supernav supernav_active" href="https://store.steampowered.com/?snr=1_7_7_7000_global-header" data-tooltip-type="selector" data-tooltip-content=".submenu_store">
		STORE	</a>
	<div class="submenu_store" style="display: none;" data-submenuid="store">
		<a class="submenuitem" href="https://store.steampowered.com/?snr=1_7_7_7000_global-header">Home</a>
					<a class="submenuitem" href="https://store.steampowered.com/explore/?snr=1_7_7_7000_global-header">Discovery Queue</a>
				<a class="submenuitem" href="https://steamcommunity.com/my/wishlist/">Wishlist</a>
		<a class="submenuitem" href="https://store.steampowered.com/points/shop/?snr=1_7_7_7000_global-header">Points Shop</a>	
       	<a class="submenuitem" href="https://store.steampowered.com/news/?snr=1_7_7_7000_global-header">News</a>
					<a class="submenuitem" href="https://store.steampowered.com/stats/?snr=1_7_7_7000_global-header">Stats</a>
					</div>


			<a class="menuitem supernav " style="display: block" href="https://steamcommunity.com/" data-tooltip-type="selector" data-tooltip-content=".submenu_community">
			COMMUNITY		</a>
		<div class="submenu_community" style="display: none;" data-submenuid="community">
			<a class="submenuitem" href="https://steamcommunity.com/">Home</a>
			<a class="submenuitem" href="https://steamcommunity.com/discussions/">Discussions</a>
			<a class="submenuitem" href="https://steamcommunity.com/workshop/">Workshop</a>
			<a class="submenuitem" href="https://steamcommunity.com/market/">Market</a>
			<a class="submenuitem" href="https://steamcommunity.com/?subsection=broadcasts">Broadcasts</a>
											</div>
		

	
						<a class="menuitem " href="https://store.steampowered.com/about/?snr=1_7_7_7000_global-header">
				About			</a>
			
	<a class="menuitem " href="https://help.steampowered.com/en/">
		SUPPORT	</a>
	</div>
	<script type="text/javascript">
		jQuery(function($) {
			$('#global_header .supernav').v_tooltip({'location':'bottom', 'destroyWhenDone': false, 'tooltipClass': 'supernav_content', 'offsetY':-6, 'offsetX': 1, 'horizontalSnap': 4, 'tooltipParent': '#global_header .supernav_container', 'correctForScreenSize': false});
		});
	</script>

		<div id="global_actions">
			<div id="global_action_menu">
									<a class="header_installsteam_btn header_installsteam_btn_green" href="https://store.steampowered.com/about/?snr=1_7_7_7000_global-header">
						<div class="header_installsteam_btn_content">
							Install Steam						</div>
					</a>
				
				
														<a class="global_action_link" href="https://store.steampowered.com/login/?redir=search%2F%3Ffilter%3Dtopsellers&redir_ssl=1&snr=1_7_7_7000_global-header">login</a>
											&nbsp;|&nbsp;
						<span class="pulldown global_action_link" id="language_pulldown" onclick="ShowMenu( this, 'language_dropdown', 'right' );">language</span>
						<div class="popup_block_new" id="language_dropdown" style="display: none;">
							<div class="popup_body popup_menu">
																																					<a class="popup_menu_item tight" href="?l=schinese&filter=topsellers" onclick="ChangeLanguage( 'schinese' ); return false;">简体中文 (Simplified Chinese)</a>
																													<a class="popup_menu_item tight" href="?l=tchinese&filter=topsellers" onclick="ChangeLanguage( 'tchinese' ); return false;">繁體中文 (Traditional Chinese)</a>
																													<a class="popup_menu_item tight" href="?l=japanese&filter=topsellers" onclick="ChangeLanguage( 'japanese' ); return false;">日本語 (Japanese)</a>
																													<a class="popup_menu_item tight" href="?l=koreana&filter=topsellers" onclick="ChangeLanguage( 'koreana' ); return false;">한국어 (Korean)</a>
																													<a class="popup_menu_item tight" href="?l=thai&filter=topsellers" onclick="ChangeLanguage( 'thai' ); return false;">ไทย (Thai)</a>
																													<a class="popup_menu_item tight" href="?l=bulgarian&filter=topsellers" onclick="ChangeLanguage( 'bulgarian' ); return false;">Български (Bulgarian)</a>
																													<a class="popup_menu_item tight" href="?l=czech&filter=topsellers" onclick="ChangeLanguage( 'czech' ); return false;">Čeština (Czech)</a>
																													<a class="popup_menu_item tight" href="?l=danish&filter=topsellers" onclick="ChangeLanguage( 'danish' ); return false;">Dansk (Danish)</a>
																													<a class="popup_menu_item tight" href="?l=german&filter=topsellers" onclick="ChangeLanguage( 'german' ); return false;">Deutsch (German)</a>
																																							<a class="popup_menu_item tight" href="?l=spanish&filter=topsellers" onclick="ChangeLanguage( 'spanish' ); return false;">Español - España (Spanish - Spain)</a>
																													<a class="popup_menu_item tight" href="?l=latam&filter=topsellers" onclick="ChangeLanguage( 'latam' ); return false;">Español - Latinoamérica (Spanish - Latin America)</a>
																													<a class="popup_menu_item tight" href="?l=greek&filter=topsellers" onclick="ChangeLanguage( 'greek' ); return false;">Ελληνικά (Greek)</a>
																													<a class="popup_menu_item tight" href="?l=french&filter=topsellers" onclick="ChangeLanguage( 'french' ); return false;">Français (French)</a>
																													<a class="popup_menu_item tight" href="?l=italian&filter=topsellers" onclick="ChangeLanguage( 'italian' ); return false;">Italiano (Italian)</a>
																													<a class="popup_menu_item tight" href="?l=indonesian&filter=topsellers" onclick="ChangeLanguage( 'indonesian' ); return false;">Bahasa Indonesia (Indonesian)</a>
																													<a class="popup_menu_item tight" href="?l=hungarian&filter=topsellers" onclick="ChangeLanguage( 'hungarian' ); return false;">Magyar (Hungarian)</a>
																													<a class="popup_menu_item tight" href="?l=dutch&filter=topsellers" onclick="ChangeLanguage( 'dutch' ); return false;">Nederlands (Dutch)</a>
																													<a class="popup_menu_item tight" href="?l=norwegian&filter=topsellers" onclick="ChangeLanguage( 'norwegian' ); return false;">Norsk (Norwegian)</a>
																													<a class="popup_menu_item tight" href="?l=polish&filter=topsellers" onclick="ChangeLanguage( 'polish' ); return false;">Polski (Polish)</a>
																													<a class="popup_menu_item tight" href="?l=portuguese&filter=topsellers" onclick="ChangeLanguage( 'portuguese' ); return false;">Português (Portuguese - Portugal)</a>
																													<a class="popup_menu_item tight" href="?l=brazilian&filter=topsellers" onclick="ChangeLanguage( 'brazilian' ); return false;">Português - Brasil (Portuguese - Brazil)</a>
																													<a class="popup_menu_item tight" href="?l=romanian&filter=topsellers" onclick="ChangeLanguage( 'romanian' ); return false;">Română (Romanian)</a>
																													<a class="popup_menu_item tight" href="?l=russian&filter=topsellers" onclick="ChangeLanguage( 'russian' ); return false;">Русский (Russian)</a>
																													<a class="popup_menu_item tight" href="?l=finnish&filter=topsellers" onclick="ChangeLanguage( 'finnish' ); return false;">Suomi (Finnish)</a>
																													<a class="popup_menu_item tight" href="?l=swedish&filter=topsellers" onclick="ChangeLanguage( 'swedish' ); return false;">Svenska (Swedish)</a>
																													<a class="popup_menu_item tight" href="?l=turkish&filter=topsellers" onclick="ChangeLanguage( 'turkish' ); return false;">Türkçe (Turkish)</a>
																													<a class="popup_menu_item tight" href="?l=vietnamese&filter=topsellers" onclick="ChangeLanguage( 'vietnamese' ); return false;">Tiếng Việt (Vietnamese)</a>
																													<a class="popup_menu_item tight" href="?l=ukrainian&filter=topsellers" onclick="ChangeLanguage( 'ukrainian' ); return false;">Українська (Ukrainian)</a>
																									<a class="popup_menu_item tight" href="https://www.valvesoftware.com/en/contact?contact-person=Translation%20Team%20Feedback" target="_blank">Report a translation problem</a>
							</div>
						</div>
												</div>
					</div>
			</div>
</div>
<div id="responsive_store_nav_ctn"></div><div id="responsive_store_nav_overlay" style="display:none"><div id="responsive_store_nav_overlay_ctn"></div><div id="responsive_store_nav_overlay_bottom"></div></div><div id="responsive_store_search_overlay" style="display:none"></div><div data-cart-banner-spot="1"></div>
		<div class="responsive_page_template_content" id="responsive_page_template_content" data-panel="{&quot;autoFocus&quot;:true}" >

			
<script type="text/javascript">

	jQuery( document ).ready(function( $ ) {

		// when we create the responsive right column menu, it moves several hidden inputs out of the form which breaks searching, so
		//	we reparent any hidden inputs in the right column to a spot at the bottom of the form with other hidden elements.
		// this selector only works once, so after moving from responsive to desktop mode the elements will stay in the hidden searchform area, but that's ok.
		//	they work just as well from there.
		Responsive_ReparentItemsInResponsiveMode( '#additional_search_options input[type=hidden]', $J('#hidden_searchform_elements') );

		
		var bInfiniScroll = true;
		var nItemCount = 3250;

        if ( nItemCount > 0 && bInfiniScroll )
        {
			InitInfiniteScroll.bEnabled = true;
			InitInfiniteScroll.nScrollSize = 50;
        }

        InitSearchPage();

		UpdateTags();

		InitAutocollapse();

		// Handle our user hitting 'back' cleanly. This needs to trigger after the Dynamic
		// Store has finished, or (if no dynamic store) just after the page renders.
		//
		// Dynamic Store will trigger its OnReady immediately if it's already complete.
		if ( GDynamicStore )
			GDynamicStore.OnReady( function() { setTimeout( HandleBackReposition, 500 ) } );
		else
			window.addEventListener( 'load', function() { setTimeout( HandleBackReposition, 500 ) } );

		// in the react native mobile app show the filter menu button next to the sort drop-down, and the croutons below those controls
			});

</script>


<div class="page_header_ctn search " data-panel="{&quot;noFocusRing&quot;:true,&quot;onOptionsActionDescription&quot;:&quot;Filter&quot;,&quot;onOptionsButton&quot;:&quot;Responsive_ToggleLocalMenu();&quot;}">

		
	
    	    <div id="store_header" class="">
		<div class="content">
			<div id="store_controls">
				<div id="cart_status_data">
																					<div class="store_header_btn_green store_header_btn" id="store_header_cart_btn" style="display: none;">
							<div class="store_header_btn_caps store_header_btn_leftcap"></div>
							<div class="store_header_btn_caps store_header_btn_rightcap"></div>
							<a id="cart_link" class="store_header_btn_content" href="https://store.steampowered.com/cart/?snr=1_7_7_7000_12">
								Cart								(<span id="cart_item_count_value">0</span>)
							</a>
						</div>
									</div>
			</div>
			
												<div id="store_nav_area">
					<div class="store_nav_leftcap"></div>
					<div class="store_nav_bg">
						<div class="store_nav" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}" >

						
							<div class="tab  flyout_tab " id="foryou_tab"
								 data-flyout="foryou_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300"
								data-panel="{&quot;focusable&quot;:true}" >
								<span class="pulldown">
									<a class="pulldown_desktop" href="https://store.steampowered.com/?snr=1_7_7_7000_12">Your Store</a>
									<a class="pulldown_mobile" href="#">Your Store</a>
									<span></span>
								</span>
							</div>
							<div class="popup_block_new flyout_tab_flyout responsive_slidedown" id="foryou_flyout" style="display: none;">
								<div class="popup_body popup_menu popup_menu_browse">
									<a class="popup_menu_item" href="https://store.steampowered.com/?snr=1_7_7_7000_12">
										Home									</a>
                                                                            <a class="popup_menu_item" href="https://store.steampowered.com/communityrecommendations/?snr=1_7_7_7000_12">
                                            Community Recommendations                                        </a>
                                    									<a class="popup_menu_item" href="https://store.steampowered.com/recommended/?snr=1_7_7_7000_12">
										Recently Viewed									</a>
                                                                            <a class="popup_menu_item" href="https://store.steampowered.com/curators/?snr=1_7_7_7000_12">
                                            Steam Curators                                        </a>
                                    								</div>
							</div>
						
														<div class="store_labs_new"></div>
                            <div class="tab  flyout_tab " id="noteworthy_tab"
								 data-flyout="noteworthy_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300" data-panel="{&quot;focusable&quot;:true}" >
								<span class="pulldown">
									<a href="javascript:void(0);" class="pulldown_desktop">New &amp; Noteworthy</a>
									<a href="javascript:void(0);" class="pulldown_mobile">New &amp; Noteworthy</a>
									<span></span>
								</span>
                            </div>
                            <div class="popup_block_new flyout_tab_flyout responsive_slidedown" id="noteworthy_flyout" style="display: none;">
                                <div class="popup_body popup_menu popup_menu_browse">
									<a class="popup_menu_item" href="https://store.steampowered.com/replay?src=7&snr=1_7_7_7000_12">
										Steam Replay 2022									</a>
																			<a class="popup_menu_item" href="https://store.steampowered.com/charts/topselling/?snr=1_7_7_7000_12">
											Top Sellers										</a>
										<a class="popup_menu_item" href="https://store.steampowered.com/charts/mostplayed/?snr=1_7_7_7000_12">
											Most Played										</a>
									                                    <a class="popup_menu_item" href="https://store.steampowered.com/explore/new/?snr=1_7_7_7000_12">
										New & Trending                                    </a>
                                    <a class="popup_menu_item" href="https://store.steampowered.com/specials/?snr=1_7_7_7000_12">
										Special Offers									</a>
									<a class="popup_menu_item" href="https://store.steampowered.com/newshub/?snr=1_7_7_7000_12">
                                        Recently Updated                                    </a>
                                    <a class="popup_menu_item" href="https://store.steampowered.com/explore/upcoming/?snr=1_7_7_7000_12">
                                        Popular Upcoming                                    </a>

									<!--
                                    <div class="popup_menu_subheader">Sale Events
									</div>

                                    <a class="popup_menu_item" href="https://store.steampowered.com/search/?specials=1&snr=1_7_7_7000_12">
                                        Weekly Specials
                                    </a>
                                    <a class="popup_menu_item" href="https://store.steampowered.com/sale/vr_specials/?snr=1_7_7_7000_12">
                                        Weekly VR Specials
                                    </a>
                                    -->
                                </div>
                            </div>

															<div class="tab  flyout_tab " id="genre_tab"
									 data-flyout="genre_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-align-to-element="foryou_tab" data-flyout-delay="300"
									data-panel="{&quot;focusable&quot;:true}" >
									<span class="pulldown">
										<a class="pulldown_desktop" href="javascript:void(0);">Categories</a>
										<a class="pulldown_mobile" href="javascript:void(0);">Categories</a>
										<span></span>
									</span>
								</div>
								<div class="popup_block_new flyout_tab_flyout responsive_slidedown" id="genre_flyout" style="display: none;">
									<div class="popup_body popup_menu_twocol_new">
										<div class="popup_menu popup_menu_browse" data-panel="{&quot;maintainY&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}" >

										<div class="popup_menu_subheader responsive_hidden">Special Sections</div>
																																																																							<a class="popup_menu_item" href="https://store.steampowered.com/genre/Free%20to%20Play/?snr=1_7_7_7000_12">
														Free to Play													</a>
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						<a class="popup_menu_item" href="https://store.steampowered.com/demos/?snr=1_7_7_7000_12">
														<span>Demos</span>
													</a>
																										<a class="popup_menu_item" href="https://store.steampowered.com/genre/Early%20Access/?snr=1_7_7_7000_12">
														Early Access													</a>
																																																																																																																																																																																																																																																																																																												<div class="category_hr responsive_hidden"></div>

																							<a class="popup_menu_item" href="https://store.steampowered.com/steamdeck/?snr=1_7_7_7000_category-menu">
													<span>Steam Deck</span>
												</a>

												<a class="popup_menu_item" href="https://store.steampowered.com/greatondeck/?snr=1_7_7_7000_category-menu">
													<span>Great on Deck</span>
												</a>

												<div class="category_hr responsive_hidden"></div>

												<a class="popup_menu_item" href="https://store.steampowered.com/controller/?snr=1_7_7_7000_12">
													<span>Controller-Friendly</span>
												</a>

												<a class="popup_menu_item" href="https://store.steampowered.com/remoteplay_hub/?snr=1_7_7_7000_12">
													<span>Remote Play</span>
												</a>

												<div class="category_hr responsive_hidden"></div>

												<a class="popup_menu_item" href="https://store.steampowered.com/vr/?snr=1_7_7_7000_12">
													<span>VR Titles</span>
												</a>

												<a class="popup_menu_item" href="https://store.steampowered.com/vrhardware/?snr=1_7_7_7000_12">
													<span>VR Hardware</span>
												</a>

												<div class="category_hr responsive_hidden"></div>
											


                                            <a class="popup_menu_item" href="https://store.steampowered.com/software/?snr=1_7_7_7000_12">
                                                Software											</a>

											<a class="popup_menu_item" href="https://store.steampowered.com/soundtracks?snr=1_7_7_7000_12">
												Soundtracks											</a>

											<div class="category_hr responsive_hidden"></div>

																							<a class="popup_menu_item" href="https://store.steampowered.com/macos?snr=1_7_7_7000_12">
													macOS												</a>
												<a class="popup_menu_item" href="https://store.steampowered.com/linux?snr=1_7_7_7000_12">
													SteamOS + Linux												</a>

												<a class="popup_menu_item" href="https://store.steampowered.com/pccafe/?snr=1_7_7_7000_12">
													<span>For PC Cafés</span>
												</a>

																					</div>
																					<div class="popup_menu popup_menu_browse leftborder" data-panel="{&quot;maintainY&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}">
																								<div class="popup_menu_subheader reduced_vspace">
													Genres
												</div>
																																				<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="action">
														Action													</div>
																									<div class="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="action">
														<a class="popup_menu_item" href="https://store.steampowered.com/category/action/?snr=1_7_7_7000_12">
															Action														</a>
													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="action">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/arcade_rhythm/?snr=1_7_7_7000_12">Arcade & Rhythm</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/fighting_martial_arts/?snr=1_7_7_7000_12">Fighting & Martial Arts</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/action_fps/?snr=1_7_7_7000_12">First-Person Shooter</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/hack_and_slash/?snr=1_7_7_7000_12">Hack & Slash</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/action_run_jump/?snr=1_7_7_7000_12">Platformer & Runner</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/action_tps/?snr=1_7_7_7000_12">Third-Person Shooter</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/shmup/?snr=1_7_7_7000_12">shmup</a>
																										</div>
																									<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="adventure">
														Adventure													</div>
																									<div class="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="adventure">
														<a class="popup_menu_item" href="https://store.steampowered.com/category/adventure/?snr=1_7_7_7000_12">
															Adventure														</a>
													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="adventure">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/adventure_rpg/?snr=1_7_7_7000_12">Adventure RPG</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/casual/?snr=1_7_7_7000_12">Casual</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/hidden_object/?snr=1_7_7_7000_12">Hidden Object</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/metroidvania/?snr=1_7_7_7000_12">Metroidvania</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/puzzle_matching/?snr=1_7_7_7000_12">Puzzle</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/story_rich/?snr=1_7_7_7000_12">Story-Rich</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/visual_novel/?snr=1_7_7_7000_12">Visual Novel</a>
																										</div>
												</div>											<div class="popup_menu popup_menu_browse " data-panel="{&quot;maintainY&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}">
																								<div class="popup_menu_subheader reduced_vspace responsive_hidden">
													<br>
												</div>
																																				<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="rpg">
														Role-Playing													</div>
																									<div class="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="rpg">
														<a class="popup_menu_item" href="https://store.steampowered.com/category/rpg/?snr=1_7_7_7000_12">
															Role-Playing														</a>
													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="rpg">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/rpg_action/?snr=1_7_7_7000_12">Action RPG</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/adventure_rpg/?snr=1_7_7_7000_12">Adventure RPG</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/rpg_jrpg/?snr=1_7_7_7000_12">JRPG</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/rpg_party_based/?snr=1_7_7_7000_12">Party-Based</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/rogue_like_rogue_lite/?snr=1_7_7_7000_12">Rogue-Like</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/rpg_strategy_tactics/?snr=1_7_7_7000_12">Strategy RPG</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/rpg_turn_based/?snr=1_7_7_7000_12">Turn-Based</a>
																										</div>
																									<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="simulation">
														Simulation													</div>
																									<div class="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="simulation">
														<a class="popup_menu_item" href="https://store.steampowered.com/category/simulation/?snr=1_7_7_7000_12">
															Simulation														</a>
													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="simulation">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/sim_building_automation/?snr=1_7_7_7000_12">Building & Automation</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sim_dating/?snr=1_7_7_7000_12">Dating</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sim_farming_crafting/?snr=1_7_7_7000_12">Farming & Crafting</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sim_hobby_sim/?snr=1_7_7_7000_12">Hobby & Job</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sim_life/?snr=1_7_7_7000_12">Life & Immersive</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sim_physics_sandbox/?snr=1_7_7_7000_12">Sandbox & Physics</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sim_space_flight/?snr=1_7_7_7000_12">Space & Flight</a>
																										</div>
												</div>											<div class="popup_menu popup_menu_browse " data-panel="{&quot;maintainY&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}">
																								<div class="popup_menu_subheader reduced_vspace responsive_hidden">
													<br>
												</div>
																																				<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="strategy">
														Strategy													</div>
																									<div class="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="strategy">
														<a class="popup_menu_item" href="https://store.steampowered.com/category/strategy/?snr=1_7_7_7000_12">
															Strategy														</a>
													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="strategy">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/strategy_card_board/?snr=1_7_7_7000_12">Card & Board</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/strategy_cities_settlements/?snr=1_7_7_7000_12">City & Settlement</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/strategy_grand_4x/?snr=1_7_7_7000_12">Grand & 4X</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/strategy_military/?snr=1_7_7_7000_12">Military</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/strategy_real_time/?snr=1_7_7_7000_12">Real-Time Strategy</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/tower_defense/?snr=1_7_7_7000_12">Tower Defense</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/strategy_turn_based/?snr=1_7_7_7000_12">Turn-Based Strategy</a>
																										</div>
																									<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="sports_and_racing">
														Sports & Racing													</div>
																									<div class="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="sports_and_racing">
														<a class="popup_menu_item" href="https://store.steampowered.com/category/sports_and_racing/?snr=1_7_7_7000_12">
															Sports & Racing														</a>
													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="sports_and_racing">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/sports/?snr=1_7_7_7000_12">All Sports</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sports_fishing_hunting/?snr=1_7_7_7000_12">Fishing & Hunting</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sports_individual/?snr=1_7_7_7000_12">Individual Sports</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/racing/?snr=1_7_7_7000_12">Racing</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/racing_sim/?snr=1_7_7_7000_12">Racing Sim</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sports_sim/?snr=1_7_7_7000_12">Sports Sim</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/sports_team/?snr=1_7_7_7000_12">Team Sports</a>
																										</div>
												</div>											<div class="popup_menu popup_menu_browse leftborder" data-panel="{&quot;maintainY&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}">
																																				<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="themes">
														Themes													</div>
																									<div class="popup_menu_subheader players popup_genre_expand_header responsive_hidden" >
														Themes													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="themes">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/anime/?snr=1_7_7_7000_12">Anime</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/horror/?snr=1_7_7_7000_12">Horror</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/mystery_detective/?snr=1_7_7_7000_12">Mystery & Detective</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/exploration_open_world/?snr=1_7_7_7000_12">Open World</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/science_fiction/?snr=1_7_7_7000_12">Sci-Fi & Cyberpunk</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/space/?snr=1_7_7_7000_12">Space</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/survival/?snr=1_7_7_7000_12">Survival</a>
														 <div class="spacer responsive_hidden"></div> 												</div>
																									<div class="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="social_and_players">
														Player Support													</div>
																									<div class="popup_menu_subheader players popup_genre_expand_header responsive_hidden" >
														Player Support													</div>
																								<div class="popup_genre_expand_content responsive_hidden" data-genre-group="social_and_players">
																											<a class="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_coop/?snr=1_7_7_7000_12">Co-Operative</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_lan/?snr=1_7_7_7000_12">LAN</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_local_party/?snr=1_7_7_7000_12">Local & Party</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_mmo/?snr=1_7_7_7000_12">MMO</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/multiplayer/?snr=1_7_7_7000_12">Multiplayer</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/multiplayer_online_competitive/?snr=1_7_7_7000_12">Online Competitive</a>
																												<a class="popup_menu_item" href="https://store.steampowered.com/category/singleplayer/?snr=1_7_7_7000_12">Singleplayer</a>
																										</div>
												</div>									</div>
								</div>
							
							                                                                <a class="tab  " href="https://store.steampowered.com/points/?snr=1_7_7_7000_12">
                                    <span>Points Shop</span>
                                </a>
                            
                                                        <a class="tab  " href="https://store.steampowered.com/news/?snr=1_7_7_7000_12">
								<span>News</span>
							</a>

                                                                                            <a class="tab  " href="https://store.steampowered.com/labs/?snr=1_7_7_7000_12">
                                    <span>Labs</span>
                                </a>
                            
															<div class="search_flex_spacer"></div>
								<div class="search_area">
									<div id="store_search">
										<form id="searchform" name="searchform" method="get" action="https://store.steampowered.com/search/" onsubmit="return SearchSuggestCheckTerm(this);">
											<input type="hidden" name="snr" value="1_7_7_7000_12" >
											<div class="searchbox">
												<input id="store_nav_search_term" name="term" type="text" class="default" placeholder="search" size="22" autocomplete="off" maxlength="64">
												<a href="#" id="store_search_link" onclick="var $Form = $J(this).parents('form'); $Form.submit(); return false;"><img src="https://store.cloudflare.steamstatic.com/public/images/blank.gif"></a>
											</div>
										</form>
									</div>
									<div id="searchterm_options" class="search_suggest popup_block_new" style="display: none;">
										<div class="popup_body search_v2" style="border-top: none;">
											<div id="search_suggestion_contents">
											</div>
										</div>
									</div>
								</div>
							
						</div>
					</div>
					<div class="store_nav_rightcap"></div>
				</div>
							</div>
	</div>
    
				<script type="text/javascript">
			$J( function() {
				BindAutoFlyoutEvents();

				var $Window = $J(window);
				var $Header = $J('#store_header');
				var $ResponsiveNavWindowShadeCtn = $J('#responsive_store_nav_ctn');
				var $ResponsiveNavOverlay = $J('#responsive_store_nav_overlay');
				var $ResponsiveNavOverlayCtn = $J('#responsive_store_nav_overlay_ctn');
				var $ResponsiveNavOverlayBottom = $J('#responsive_store_nav_overlay_bottom');
				var $HeaderWrapper;
				$Window.on('Responsive_SmallScreenModeToggled.StoreMenu', function() {
					var bUseSmallScreenMode = window.UseSmallScreenMode && window.UseSmallScreenMode();

											if ( !$HeaderWrapper )
							$HeaderWrapper = $Header.wrap( $J('<div/>', {'class': 'responsive_store_nav_ctn_spacer'} ) ).parent();

						if ( bUseSmallScreenMode )
							$ResponsiveNavWindowShadeCtn.append( $Header );
						else
							$HeaderWrapper.append( $Header );


						if ( bUseSmallScreenMode )
						{
							$Header.css( 'visibility', 'hidden' );
							$Header.show();

							var nStartingScrollPosition = $J('#store_header').height();
							if ( $Window.scrollTop() < nStartingScrollPosition )
								$Window.scrollTop( nStartingScrollPosition );

							$Header.css('visibility', 'visible');
						}
									} );
				
				window.setTimeout( function() { $J(window).trigger('Responsive_SmallScreenModeToggled.StoreMenu'); }, 0 );

										var g_rgUserPreferences = {
							excluded_tags : [],
							excluded_content_descriptors : [3,4]						};
						
													g_rgUserPreferences['use_store_query'] = 1;
						
						g_rgUserPreferences['use_search_spellcheck'] = 1;
						g_rgUserPreferences['search_creators_and_tags'] = 1;

						if( $J('#searchform').length > 0 )
						{
							// default search support where the web page includes the search edit control
							EnableSearchSuggestions( $J('#searchform')[0].elements['term'], '1_7_7_7000', 'NL', 1, 'english', g_rgUserPreferences, '20227947' );
						}
						else 
						{
							// search support for the mobile client.  the mobile client has a native search edit control but relies on the web content to perform the query and show results
													}
				
				// make genre categories expand/collapse on mobile
				$J(document).on( 'click', '.popup_genre_expand_header', function ( event ) {
					if ( !UseSmallScreenMode() )
						return;

					event.preventDefault();
					var $Element = $J(this);
					var $Target = $J('.popup_genre_expand_content[data-genre-group=' + $Element.data('genre-group') + ']' );
					if ( $Element.data('group-expanded') )
					{
						$Target.slideUp();
						$Element.data( 'group-expanded', false );
					}
					else
					{
						$Target.slideDown();
						$Element.data( 'group-expanded', true );
					}
				});
			} );
		</script>
	<script type="text/javascript">
	var g_AccountID = 0;
	var g_sessionID = "83a3e7661787e5228c5d57c6";
	var g_ServerTime = 1694274864;

	$J( InitMiniprofileHovers( 'https%3A%2F%2Fstore.steampowered.com%2F' ) );

			$J( function() { InitCookiePreferencesPopup() } );
	
			GStoreItemData.AddNavParams({
			__page_default: "1_7_7_7000",
			storemenu_recommendedtags: "1_7_7_7000_17"		});
		GDynamicStore.Init( 0, false, "", {"primary_language":null,"secondary_languages":null,"platform_windows":null,"platform_mac":null,"platform_linux":null,"timestamp_updated":null,"hide_store_broadcast":null,"review_score_preference":null,"timestamp_content_descriptor_preferences_updated":null,"provide_deck_feedback":null,"additional_languages":null}, 'NL',
			{"bNoDefaultDescriptors":false} );
		GStoreItemData.SetCurrencyFormatter( function( nValueInCents, bWholeUnitsOnly ) { var fnBase = function( nValueInCents, bWholeUnitsOnly ) { var fmt = function( nValueInCents, bWholeUnitsOnly ) {	var format = v_numberformat( nValueInCents / 100, bWholeUnitsOnly ? 0 : 2, ",", " "); return format; };var strNegativeSymbol = '';	if ( nValueInCents < 0 ) { strNegativeSymbol = '-'; nValueInCents = -nValueInCents; }return strNegativeSymbol + fmt( nValueInCents, bWholeUnitsOnly ) + "\u20ac";}; return fnBase( nValueInCents, bWholeUnitsOnly ).replace(  ',00', ',--' ); } );
		GStoreItemData.SetCurrencyMinPriceIncrement( 1 );
	</script>

	<div class="page_content">
		<div class="breadcrumbs"></div>

		
		<h2 class="pageheader full">
			Top Sellers		</h2>
		
				<div class="termcontainer">
			
										<div id="termsnone">
					<div class="pagesubheader">All Products</div>
				</div>
			
			<div class="searchtag" id="searchtag_tmpl" style="display: none"><img class="search_crouton_icon" /><span class="label"></span> <a href="#" class="btn"></a></div>

		</div>
	</div>

</div>
<form action="https://store.steampowered.com/search/" id="advsearchform" name="advsearchform" onSubmit="AjaxSearchResults(); return false;" method="GET">
<!-- Main Background -->
<div class="page_content_ctn" data-panel="{&quot;noFocusRing&quot;:true,&quot;onOptionsActionDescription&quot;:&quot;Filter&quot;,&quot;onOptionsButton&quot;:&quot;Responsive_ToggleLocalMenu();&quot;}">
	<div class="page_content" data-gpnav="columns">

		<div class="leftcol large" data-gpnav="rows" >

			<div class="searchbar" data-gpnav="columns">
				<div class="sortbox">
					<div class="label">Sort by</div>
					<div class="dselect_container" id="sort_by_dselect_container">
					<input id="sort_by" type="hidden" name="sort_by" value="_ASC" onchange="$J('sort_by').val(this.value); AjaxSearchResults(); "/>
					<a class="trigger"id="sort_by_trigger" href="javascript:DSelectNoop();" onfocus="DSelectOnFocus( 'sort_by');" onblur="DSelectOnBlur( 'sort_by');" onclick="DSelectOnTriggerClick('sort_by');">Relevance</a><div class="dropcontainer" id="sort_by_listctn" ><ul class="dropdownhidden" id="sort_by_droplist" data-panel="{&quot;bFocusRingRoot&quot;:true,&quot;onCancelButton&quot;:&quot;DSelectHide( 'sort_by')&quot;,&quot;flow-children&quot;:&quot;column&quot;}""><li ><a data-panel="{&quot;noFocusRing&quot;:true}"class="inactive_selection" tabindex="99999" href="javascript:DSelectNoop();" onmouseover="DHighlightItem( 'sort_by', 0, false );" id="_ASC" onclick="DHighlightItem( 'sort_by', 0, true );" >Relevance</a></li><li ><a data-panel="{&quot;noFocusRing&quot;:true}"class="inactive_selection" tabindex="99999" href="javascript:DSelectNoop();" onmouseover="DHighlightItem( 'sort_by', 1, false );" id="Released_DESC" onclick="DHighlightItem( 'sort_by', 1, true );" >Release date</a></li><li ><a data-panel="{&quot;noFocusRing&quot;:true}"class="inactive_selection" tabindex="99999" href="javascript:DSelectNoop();" onmouseover="DHighlightItem( 'sort_by', 2, false );" id="Name_ASC" onclick="DHighlightItem( 'sort_by', 2, true );" >Name</a></li><li ><a data-panel="{&quot;noFocusRing&quot;:true}"class="inactive_selection" tabindex="99999" href="javascript:DSelectNoop();" onmouseover="DHighlightItem( 'sort_by', 3, false );" id="Price_ASC" onclick="DHighlightItem( 'sort_by', 3, true );" >Lowest Price</a></li><li ><a data-panel="{&quot;noFocusRing&quot;:true}"class="inactive_selection" tabindex="99999" href="javascript:DSelectNoop();" onmouseover="DHighlightItem( 'sort_by', 4, false );" id="Price_DESC" onclick="DHighlightItem( 'sort_by', 4, true );" >Highest Price</a></li><li ><a data-panel="{&quot;noFocusRing&quot;:true}"class="inactive_selection" tabindex="99999" href="javascript:DSelectNoop();" onmouseover="DHighlightItem( 'sort_by', 5, false );" id="Reviews_DESC" onclick="DHighlightItem( 'sort_by', 5, true );" >User Reviews</a></li><li ><a data-panel="{&quot;noFocusRing&quot;:true}"class="inactive_selection" tabindex="99999" href="javascript:DSelectNoop();" onmouseover="DHighlightItem( 'sort_by', 6, false );" id="DeckCompatDate_DESC" onclick="DHighlightItem( 'sort_by', 6, true );" >Steam Deck Compatibility Review Date</a></li></ul>
			</div>
		</div><script language="javascript">$J( function() { $J('#sort_by_dselect_container').on('keydown', HandleKeyDown ); });</script>				</div>
				<div class="searchbar_left">
																<input data-panel="{&quot;autoFocus&quot;:true}" type="text" class="text" id="term" name="displayterm" data-gpnav="item"
								onfocus="if(this.value=='enter search term or tag'){this.value=''}"
								onchange="$('realterm').value= (this.value=='enter search term or tag') ? '' : this.value"
								onblur="if(this.value==''){this.value='enter search term or tag';}"
								value="enter search term or tag" maxlength="64">
										<input type="hidden" name="term" id="realterm" value="">
					<input type="hidden" name="hide_filtered_results_warning" id="hide_filtered_results_warning" value="">
					<input type="hidden" name="ignore_preferences" id="ignore_preferences" value="">
										<input type="hidden" name="force_infinite" id="force_infinite" value="" autocomplete="off" />
																					<button type="submit" class="btnv6_blue_hoverfade btn_small" data-gpnav="item">
							<span>Search</span>
						</button>
										<div id="term_options" class="autocomplete" style="display: none;"></div>
				</div>
				<div class="clear_ctn" style="clear: both;"></div>
			</div>
			

			

			<script type="text/javascript">
																	new Ajax.Autocompleter( $('advsearchform').elements['displayterm'], 'term_options', 'https://store.steampowered.com/search/suggest', {frequency: 0.2, method: "get", paramName: 'term', parameters : 'cc=NL&realm=1&l=english&excluded_content_descriptors%5B0%5D=3&excluded_content_descriptors%5B1%5D=4', allowFreeEntry: true, afterUpdateElement:function() { $('realterm').value=$('term').value; AjaxSearchResults(); } });
							</script>

			<div id="search_results_filtered_warning_persistent" class="search_results_filtered_warning collapsed" data-panel="{&quot;type&quot;:&quot;PanelGroup&quot;}" ></div>
			<div id="search_results" class="search_results" data-gpnav="rows">
				
<script type = "text/javascript">
	$J( function() {
		PopulateTagFacetData( [[4182,"1630"],[19,"1588"],[492,"1270"],[599,"1264"],[21,"1240"],[9,"991"],[3859,"910"],[597,"812"],[4166,"725"],[122,"664"],[3839,"553"],[1742,"529"],[1695,"522"],[1685,"520"],[3871,"483"],[3810,"460"],[4667,"433"],[3834,"415"],[4345,"400"],[1756,"399"],[4191,"391"],[4136,"379"],[1684,"372"],[1664,"356"],[1697,"351"]], [], false );
		PopulateLangFilterData( ["english"], ["english"] );
		PopulateDeckCompatFacetData( [[0,"1690"],[2,"767"],[3,"476"],[1,"317"]],  );
	});
</script>

		<div id="search_results_filtered_warning" class="search_results_filtered_warning collapsed " >
							<div>3,250 results match your search. 221 titles have been excluded based on your preferences. However, none of these titles would appear on the first page of results.</div>
						<div class="settings_tab" data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" onclick="OnClickShowFilteredContentSettingsModal()"> </div>

		</div>
			<script>
		g_strUnfilteredURL = 'https://store.steampowered.com/search/?filter=topsellers&ignore_preferences=1';
	</script>
	
<div id="search_result_container" >

	<div class="search_rule"></div>

	
        <!-- Extra empty div to hack around IE7 layout bug -->
        <div></div>
        <!-- End Extra empty div -->

		<div data-panel="{&quot;maintainY&quot;:true,&quot;bFocusRingRoot&quot;:true,&quot;flow-children&quot;:&quot;column&quot;}" id="search_resultsRows">
			
<!-- List Items -->

				<a href="https://store.steampowered.com/app/1716740/Starfield/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1716740" data-ds-itemkey="App_1716740" data-ds-tagids="[1755,1695,122,4182,3942,3834,1742]" data-ds-descids="[1,2,5]" data-ds-crtrids="[33028765]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1716740,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/capsule_sm_120.jpg?t=1693958437" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/capsule_sm_120.jpg?t=1693958437 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/capsule_231x87.jpg?t=1693958437 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Starfield</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">6 Sep, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Mostly Positive&lt;br&gt;79% of the 32,275 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="6999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="6999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">69,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1086940" data-ds-itemkey="App_1086940" data-ds-tagids="[122,6426,1742,4747,21,4474,4325]" data-ds-descids="[1,2,5]" data-ds-crtrids="[6879350]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1086940,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/capsule_sm_120.jpg?t=1692294127" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/capsule_sm_120.jpg?t=1692294127 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/capsule_231x87.jpg?t=1692294127 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Baldur's Gate 3</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">3 Aug, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Overwhelmingly Positive&lt;br&gt;95% of the 272,324 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="5999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="5999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">59,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1174180" data-ds-itemkey="App_1174180" data-ds-tagids="[1695,1742,1647,21,19,3859,4175]" data-ds-descids="[5]" data-ds-crtrids="[1541443,36291848]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1174180,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_sm_120.jpg?t=1671485009" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_sm_120.jpg?t=1671485009 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_231x87.jpg?t=1671485009 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Red Dead Redemption 2</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">5 Dec, 2019</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;90% of the 410,503 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1979">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1979" data-bundlediscount="0" data-discount="67"><div class="discount_pct">-67%</div><div class="discount_prices"><div class="discount_original_price">59,99€</div><div class="discount_final_price">19,79€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1272080/PAYDAY_3/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1272080" data-ds-itemkey="App_1272080" data-ds-tagids="[1680,19,1685,6378,1663,3859,1774]" data-ds-descids="[2,5]" data-ds-crtrids="[32824912,4283115,40511350]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1272080,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1272080/capsule_sm_120_alt_assets_1.jpg?t=1694173049" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1272080/capsule_sm_120_alt_assets_1.jpg?t=1694173049 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1272080/capsule_231x87_alt_assets_1.jpg?t=1694173049 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">PAYDAY 3</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">21 Sep, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="3999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="3999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">39,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1675200/Steam_Deck/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1675200" data-ds-itemkey="App_1675200" data-ds-crtrids="[4]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1675200,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1675200/capsule_sm_120.jpg?t=1691453048" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1675200/capsule_sm_120.jpg?t=1691453048 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1675200/capsule_231x87.jpg?t=1691453048 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Steam Deck</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow"></div>
                <div class="col search_reviewscore responsive_secondrow">
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="41900">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="41900" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">419,00€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/949230/Cities_Skylines_II/?snr=1_7_7_7000_150_1"
			 data-ds-appid="949230" data-ds-itemkey="App_949230" data-ds-tagids="[599,4328,1643,4182,9,3810,12472]" data-ds-crtrids="[6859167]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:949230,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/949230/capsule_sm_120.jpg?t=1692878707" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/949230/capsule_sm_120.jpg?t=1692878707 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/949230/capsule_231x87.jpg?t=1692878707 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Cities: Skylines II</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">24 Oct, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="4999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="4999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">49,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/2230110/Fae_Farm/?snr=1_7_7_7000_150_1"
			 data-ds-appid="2230110" data-ds-itemkey="App_2230110" data-ds-tagids="[122,87918,4057,97376,1685,3859,1654]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:2230110,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2230110/capsule_sm_120.jpg?t=1694191793" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/2230110/capsule_sm_120.jpg?t=1694191793 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/2230110/capsule_231x87.jpg?t=1694191793 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Fae Farm</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">8 Sep, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;84% of the 195 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="3999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="3999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">39,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1172470/Apex_Legends/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1172470" data-ds-itemkey="App_1172470" data-ds-tagids="[113,3859,176981,1774,1663,3839,1775]" data-ds-crtrids="[37913704,36135791,38963503]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1172470,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_sm_120.jpg?t=1694114964" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_sm_120.jpg?t=1694114964 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_231x87.jpg?t=1694114964 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Apex Legends™</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">5 Nov, 2020</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;80% of the 713,621 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/2338770/NBA_2K24/?snr=1_7_7_7000_150_1"
			 data-ds-appid="2338770" data-ds-itemkey="App_2338770" data-ds-tagids="[701,599,1746,5055,9204,4191,4175]" data-ds-crtrids="[2428135,33338134]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:2338770,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2338770/capsule_sm_120.jpg?t=1694147493" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/2338770/capsule_sm_120.jpg?t=1694147493 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/2338770/capsule_231x87.jpg?t=1694147493 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">NBA 2K24</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">8 Sep, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary negative" data-tooltip-html="Overwhelmingly Negative&lt;br&gt;14% of the 1,002 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="5999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="5999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">59,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1774580/STAR_WARS_Jedi_Survivor/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1774580" data-ds-itemkey="App_1774580" data-ds-tagids="[19,21,4182,29482,3942,1697,4106]" data-ds-crtrids="[37913704,36135791,37385824]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1774580,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/capsule_sm_120.jpg?t=1689016715" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/capsule_sm_120.jpg?t=1689016715 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/capsule_231x87.jpg?t=1689016715 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">STAR WARS Jedi: Survivor™</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">28 Apr, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary mixed" data-tooltip-html="Mixed&lt;br&gt;63% of the 33,341 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="4899">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="4899" data-bundlediscount="0" data-discount="30"><div class="discount_pct">-30%</div><div class="discount_prices"><div class="discount_original_price">69,99€</div><div class="discount_final_price">48,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1938090/Call_of_Duty/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1938090" data-ds-itemkey="App_1938090" data-ds-tagids="[1663,3859,1774,19,4182,4168,3839]" data-ds-descids="[2,5]" data-ds-crtrids="[42355870,42356652]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1938090,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/capsule_sm_120.jpg?t=1694122677" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/capsule_sm_120.jpg?t=1694122677 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/capsule_231x87.jpg?t=1694122677 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Call of Duty®</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">28 Oct, 2022</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary mixed" data-tooltip-html="Mixed&lt;br&gt;59% of the 429,543 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1426440/MICROVOLTS_Recharged/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1426440" data-ds-itemkey="App_1426440" data-ds-tagids="[113,3814,4747,4085,597,5547,4726]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1426440,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1426440/capsule_sm_120.jpg?t=1694215834" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1426440/capsule_sm_120.jpg?t=1694215834 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1426440/capsule_231x87.jpg?t=1694215834 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">MICROVOLTS: Recharged</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">9 Sep, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;84% of the 359 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/252490/Rust/?snr=1_7_7_7000_150_1"
			 data-ds-appid="252490" data-ds-itemkey="App_252490" data-ds-tagids="[1662,1702,3859,1695,1100689,1643,1775]" data-ds-descids="[1,2,5]" data-ds-crtrids="[2081]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:252490,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/capsule_sm_120.jpg?t=1693652810" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/capsule_sm_120.jpg?t=1693652810 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/252490/capsule_231x87.jpg?t=1693652810 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Rust</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">8 Feb, 2018</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;87% of the 786,978 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="3999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="3999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">39,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?snr=1_7_7_7000_150_1"
			 data-ds-appid="271590" data-ds-itemkey="App_271590" data-ds-tagids="[1695,19,3859,6378,1100687,1697,3839]" data-ds-descids="[5]" data-ds-crtrids="[1541443,36291848]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:271590,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_sm_120.jpg?t=1678296348" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_sm_120.jpg?t=1678296348 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_231x87.jpg?t=1678296348 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Grand Theft Auto V</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">14 Apr, 2015</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;86% of the 1,484,761 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1499" data-bundlediscount="40" data-discount="63"><div class="bundle_base_discount">-40%</div><div class="discount_pct">-63%</div><div class="discount_prices"><div class="discount_original_price">39,98€</div><div class="discount_final_price">14,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/236390/War_Thunder/?snr=1_7_7_7000_150_1"
			 data-ds-appid="236390" data-ds-itemkey="App_236390" data-ds-tagids="[113,11104,3993,21978,4150,15045,1678]" data-ds-crtrids="[37819846]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:236390,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/236390/capsule_sm_120.jpg?t=1689771864" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/236390/capsule_sm_120.jpg?t=1689771864 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/236390/capsule_231x87.jpg?t=1689771864 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">War Thunder</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span><span class="vr_supported">VR Supported</span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">15 Aug, 2013</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Mostly Positive&lt;br&gt;75% of the 393,929 user reviews for this game are positive.&lt;br&gt;&lt;br&gt;This product has experienced one or more periods of off-topic review activity.  Based on your preferences, the reviews within these periods have been excluded from this product's Review Score.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/381210/Dead_by_Daylight/?snr=1_7_7_7000_150_1"
			 data-ds-appid="381210" data-ds-itemkey="App_381210" data-ds-tagids="[1667,3978,3859,3843,1685,1662,4345]" data-ds-descids="[2,5]" data-ds-crtrids="[33367148]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:381210,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/capsule_sm_120.jpg?t=1694008105" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/capsule_sm_120.jpg?t=1694008105 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/381210/capsule_231x87.jpg?t=1694008105 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Dead by Daylight</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">14 Jun, 2016</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;80% of the 492,560 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="999" data-bundlediscount="0" data-discount="50"><div class="discount_pct">-50%</div><div class="discount_prices"><div class="discount_original_price">19,99€</div><div class="discount_final_price">9,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1888160" data-ds-itemkey="App_1888160" data-ds-tagids="[4821,4747,19,1697,3993,4191,5752]" data-ds-descids="[2,5]" data-ds-crtrids="[33042543]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1888160,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/capsule_sm_120.jpg?t=1694105482" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/capsule_sm_120.jpg?t=1694105482 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/capsule_231x87.jpg?t=1694105482 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">ARMORED CORE™ VI FIRES OF RUBICON™</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">25 Aug, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;87% of the 33,063 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="5999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="5999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">59,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/223750/DCS_World_Steam_Edition/?snr=1_7_7_7000_150_1"
			 data-ds-appid="223750" data-ds-itemkey="App_223750" data-ds-tagids="[599,15045,113,4168,3859,4175,21978]" data-ds-crtrids="[33975870]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:223750,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/223750/capsule_sm_120.jpg?t=1693606790" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/223750/capsule_sm_120.jpg?t=1693606790 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/223750/capsule_231x87.jpg?t=1693606790 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">DCS World Steam Edition</span>
                    <div>
                                                <span class="platform_img win"></span><span class="vr_supported">VR Supported</span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">2 Aug, 2013</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;86% of the 29,192 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/374320/DARK_SOULS_III/?snr=1_7_7_7000_150_1"
			 data-ds-appid="374320" data-ds-itemkey="App_374320" data-ds-tagids="[29482,4604,4026,122,4166,3854,1697]" data-ds-crtrids="[33042543]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:374320,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_sm_120.jpg?t=1682651227" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_sm_120.jpg?t=1682651227 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_231x87.jpg?t=1682651227 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">DARK SOULS™ III</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">11 Apr, 2016</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;94% of the 230,492 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="2999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="2999" data-bundlediscount="0" data-discount="50"><div class="discount_pct">-50%</div><div class="discount_prices"><div class="discount_original_price">59,99€</div><div class="discount_final_price">29,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_7000_150_1"
			 data-ds-appid="730" data-ds-itemkey="App_730" data-ds-tagids="[1663,1774,3859,3878,19,5711,5055]" data-ds-descids="[2,5]" data-ds-crtrids="[4]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:730,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1683566799" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1683566799 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_231x87.jpg?t=1683566799 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Counter-Strike: Global Offensive</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">21 Aug, 2012</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;88% of the 7,498,293 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1429">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="1429" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">14,29€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/2195250/EA_SPORTS_FC_24/?snr=1_7_7_7000_150_1"
			 data-ds-appid="2195250" data-ds-itemkey="App_2195250" data-ds-tagids="[701,1254546,1775,6730,3878,5055,7481]" data-ds-crtrids="[36135791,38196776]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:2195250,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/capsule_sm_120.jpg?t=1692762924" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/capsule_sm_120.jpg?t=1692762924 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/capsule_231x87.jpg?t=1692762924 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">EA SPORTS FC™ 24</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">29 Sep, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="6999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="6999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">69,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1599340/Lost_Ark/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1599340" data-ds-itemkey="App_1599340" data-ds-tagids="[1754,113,4231,3859,1646,122,4747]" data-ds-descids="[1,2,5]" data-ds-crtrids="[39322141]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1599340,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/capsule_sm_120.jpg?t=1693257014" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/capsule_sm_120.jpg?t=1693257014 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/capsule_231x87.jpg?t=1693257014 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Lost Ark</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">12 Feb, 2022</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Mostly Positive&lt;br&gt;71% of the 194,898 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1029690/Sniper_Elite_5/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1029690" data-ds-itemkey="App_1029690" data-ds-tagids="[19,4182,1687,4150,3859,1774,7423]" data-ds-descids="[2,5]" data-ds-crtrids="[32806657]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1029690,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1029690/capsule_sm_120.jpg?t=1692887482" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1029690/capsule_sm_120.jpg?t=1692887482 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1029690/capsule_231x87.jpg?t=1692887482 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Sniper Elite 5</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">26 May, 2022</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;80% of the 10,503 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1499">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1499" data-bundlediscount="0" data-discount="70"><div class="discount_pct">-70%</div><div class="discount_prices"><div class="discount_original_price">49,99€</div><div class="discount_final_price">14,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1085660/Destiny_2/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1085660" data-ds-itemkey="App_1085660" data-ds-tagids="[113,1695,1663,353880,1754,1685,6730]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1085660,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_sm_120.jpg?t=1693241514" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_sm_120.jpg?t=1693241514 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_231x87.jpg?t=1693241514 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Destiny 2</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">1 Oct, 2019</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;81% of the 562,824 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/255710/Cities_Skylines/?snr=1_7_7_7000_150_1"
			 data-ds-appid="255710" data-ds-itemkey="App_255710" data-ds-tagids="[4328,599,1643,12472,9,3810,4182]" data-ds-crtrids="[6859167]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:255710,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/255710/capsule_sm_120.jpg?t=1692879552" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/255710/capsule_sm_120.jpg?t=1692879552 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/255710/capsule_231x87.jpg?t=1692879552 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Cities: Skylines</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">10 Mar, 2015</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;93% of the 178,509 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="2799">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="2799" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">27,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1248130/Farming_Simulator_22/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1248130" data-ds-itemkey="App_1248130" data-ds-tagids="[599,87918,1685,22602,1669,12472,3859]" data-ds-crtrids="[33271475,34136467]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1248130,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1248130/capsule_sm_120.jpg?t=1680158089" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1248130/capsule_sm_120.jpg?t=1680158089 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1248130/capsule_231x87.jpg?t=1680158089 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Farming Simulator 22</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">22 Nov, 2021</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;91% of the 38,797 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="2999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="2999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">29,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/?snr=1_7_7_7000_150_1"
			 data-ds-appid="435150" data-ds-itemkey="App_435150" data-ds-tagids="[21725,122,1741,1742,1684,3834,4474]" data-ds-crtrids="[6879350]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:435150,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/435150/capsule_sm_120.jpg?t=1668591196" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/435150/capsule_sm_120.jpg?t=1668591196 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/435150/capsule_231x87.jpg?t=1668591196 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Divinity: Original Sin 2 - Definitive Edition</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">14 Sep, 2017</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Overwhelmingly Positive&lt;br&gt;95% of the 146,627 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1799">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1799" data-bundlediscount="0" data-discount="60"><div class="discount_pct">-60%</div><div class="discount_prices"><div class="discount_original_price">44,99€</div><div class="discount_final_price">17,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/2080690/Sunkenland/?snr=1_7_7_7000_150_1"
			 data-ds-appid="2080690" data-ds-itemkey="App_2080690" data-ds-tagids="[493,1100689,9157,1685,1662,21,7332]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:2080690,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2080690/capsule_sm_120.jpg?t=1693808856" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/2080690/capsule_sm_120.jpg?t=1693808856 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/2080690/capsule_231x87.jpg?t=1693808856 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Sunkenland</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">26 Aug, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Mostly Positive&lt;br&gt;78% of the 4,966 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1950">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="1950" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">19,50€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/?snr=1_7_7_7000_150_1"
			 data-ds-appid="570940" data-ds-itemkey="App_570940" data-ds-tagids="[29482,4604,122,4026,19,4342,1684]" data-ds-crtrids="[33042543]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:570940,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/capsule_sm_120.jpg?t=1682652141" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/capsule_sm_120.jpg?t=1682652141 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/570940/capsule_231x87.jpg?t=1682652141 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">DARK SOULS™: REMASTERED</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">24 May, 2018</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;89% of the 55,420 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1999" data-bundlediscount="0" data-discount="50"><div class="discount_pct">-50%</div><div class="discount_prices"><div class="discount_original_price">39,99€</div><div class="discount_final_price">19,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/570/Dota_2/?snr=1_7_7_7000_150_1"
			 data-ds-appid="570" data-ds-itemkey="App_570" data-ds-tagids="[113,1718,3859,9,5055,5711,3878]" data-ds-crtrids="[4,40102679]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:570,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_sm_120.jpg?t=1682639497" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_sm_120.jpg?t=1682639497 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_231x87.jpg?t=1682639497 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Dota 2</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span>                                                	<span class="includes_games_results">Includes 27 games</span>
                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">9 Jul, 2013</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;82% of the 2,046,380 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="6016" data-bundlediscount="55" data-discount="55"><div class="bundle_base_discount">-55%</div><div class="discount_pct">-55%</div><div class="discount_prices"><div class="discount_original_price">133,70€</div><div class="discount_final_price">60,16€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1063420/Void_Crew/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1063420" data-ds-itemkey="App_1063420" data-ds-tagids="[21,19,3859,3843,4106,16598,1685]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1063420,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1063420/capsule_sm_120.jpg?t=1694177016" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1063420/capsule_sm_120.jpg?t=1694177016 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1063420/capsule_231x87.jpg?t=1694177016 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Void Crew</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">7 Sep, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;92% of the 184 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1759">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1759" data-bundlediscount="0" data-discount="20"><div class="discount_pct">-20%</div><div class="discount_prices"><div class="discount_original_price">21,99€</div><div class="discount_final_price">17,59€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/230410/Warframe/?snr=1_7_7_7000_150_1"
			 data-ds-appid="230410" data-ds-itemkey="App_230410" data-ds-tagids="[113,4231,353880,3814,19,122,1697]" data-ds-descids="[2,5]" data-ds-crtrids="[32978945]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:230410,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/230410/capsule_sm_120.jpg?t=1693084453" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/230410/capsule_sm_120.jpg?t=1693084453 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/230410/capsule_231x87.jpg?t=1693084453 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Warframe</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">25 Mar, 2013</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;86% of the 542,279 user reviews for this game are positive.&lt;br&gt;&lt;br&gt;This product has experienced one or more periods of off-topic review activity.  Based on your preferences, the reviews within these periods have been excluded from this product's Review Score.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/?snr=1_7_7_7000_150_1"
			 data-ds-appid="578080" data-ds-itemkey="App_578080" data-ds-tagids="[1662,1774,176981,3859,1663,1775,3814]" data-ds-descids="[2,5]" data-ds-crtrids="[33973721]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:578080,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_sm_120.jpg?t=1691654148" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_sm_120.jpg?t=1691654148 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_231x87.jpg?t=1691654148 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">PUBG: BATTLEGROUNDS</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">21 Dec, 2017</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary mixed" data-tooltip-html="Mixed&lt;br&gt;57% of the 2,217,586 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/2108330/F1_23/?snr=1_7_7_7000_150_1"
			 data-ds-appid="2108330" data-ds-itemkey="App_2108330" data-ds-tagids="[21978,699,1644,3859,701,1100687,4182]" data-ds-crtrids="[36167191,36135791]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:2108330,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2108330/capsule_sm_120.jpg?t=1688987889" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/2108330/capsule_sm_120.jpg?t=1688987889 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/2108330/capsule_231x87.jpg?t=1688987889 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">F1® 23</span>
                    <div>
                                                <span class="platform_img win"></span><span class="vr_supported">VR Supported</span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">16 Jun, 2023</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;85% of the 5,082 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="5399">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="5399" data-bundlediscount="0" data-discount="40"><div class="discount_pct">-40%</div><div class="discount_prices"><div class="discount_original_price">89,99€</div><div class="discount_final_price">53,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1222680/Need_for_Speed_Heat/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1222680" data-ds-itemkey="App_1222680" data-ds-tagids="[699,1695,1644,3859,19,4182,21]" data-ds-crtrids="[36140392,36135791]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1222680,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/capsule_sm_120.jpg?t=1690398297" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/capsule_sm_120.jpg?t=1690398297 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/capsule_231x87.jpg?t=1690398297 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Need for Speed™ Heat</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">4 Jun, 2020</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;84% of the 70,120 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="699">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="699" data-bundlediscount="0" data-discount="90"><div class="discount_pct">-90%</div><div class="discount_prices"><div class="discount_original_price">69,99€</div><div class="discount_final_price">6,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/534380/Dying_Light_2_Stay_Human/?snr=1_7_7_7000_150_1"
			 data-ds-appid="534380" data-ds-itemkey="App_534380" data-ds-tagids="[1685,1695,1659,4036,3859,3834,1667]" data-ds-descids="[2,5]" data-ds-crtrids="[33025758,35023672]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:534380,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/534380/capsule_sm_120_alt_assets_22.jpg?t=1694163147" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/534380/capsule_sm_120_alt_assets_22.jpg?t=1694163147 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/534380/capsule_231x87_alt_assets_22.jpg?t=1694163147 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Dying Light 2 Stay Human</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">4 Feb, 2022</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Mostly Positive&lt;br&gt;78% of the 113,309 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="2999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="2999" data-bundlediscount="0" data-discount="50"><div class="discount_pct">-50%</div><div class="discount_prices"><div class="discount_original_price">59,99€</div><div class="discount_final_price">29,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/39210/FINAL_FANTASY_XIV_Online/?snr=1_7_7_7000_150_1"
			 data-ds-appid="39210" data-ds-itemkey="App_39210" data-ds-tagids="[1754,122,128,1684,4747,4434,1756]" data-ds-crtrids="[1012195,34459938]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:39210,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/39210/capsule_sm_120.jpg?t=1693964220" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/39210/capsule_sm_120.jpg?t=1693964220 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/39210/capsule_231x87.jpg?t=1693964220 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">FINAL FANTASY XIV Online</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">18 Feb, 2014</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;88% of the 62,426 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">9,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1091500/Cyberpunk_2077/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1091500" data-ds-itemkey="App_1091500" data-ds-tagids="[4115,1695,6650,122,4182,3942,4295]" data-ds-descids="[1,2,5]" data-ds-crtrids="[32989758]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1091500,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_sm_120.jpg?t=1693591602" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_sm_120.jpg?t=1693591602 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_231x87.jpg?t=1693591602 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Cyberpunk 2077</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">10 Dec, 2020</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;80% of the 557,222 user reviews for this game are positive.&lt;br&gt;&lt;br&gt;This product has experienced one or more periods of off-topic review activity.  Based on your preferences, the reviews within these periods have been excluded from this product's Review Score.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="5999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="5999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">59,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/?snr=1_7_7_7000_150_1"
			 data-ds-appid="359550" data-ds-itemkey="App_359550" data-ds-tagids="[1663,1775,5055,3859,1774,1708,3878]" data-ds-crtrids="[33075774,44535644]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:359550,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_sm_120.jpg?t=1692727022" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_sm_120.jpg?t=1692727022 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_231x87.jpg?t=1692727022 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Tom Clancy's Rainbow Six® Siege</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">1 Dec, 2015</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;86% of the 993,676 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="1999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">19,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1465360/SnowRunner/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1465360" data-ds-itemkey="App_1465360" data-ds-tagids="[599,1100687,21,3834,1644,3810,4175]" data-ds-crtrids="[32513338,21394]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1465360,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1465360/capsule_sm_120.jpg?t=1693405956" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1465360/capsule_sm_120.jpg?t=1693405956 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1465360/capsule_231x87.jpg?t=1693405956 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">SnowRunner</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">18 May, 2021</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;89% of the 21,443 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1499">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1499" data-bundlediscount="0" data-discount="50"><div class="discount_pct">-50%</div><div class="discount_prices"><div class="discount_original_price">29,99€</div><div class="discount_final_price">14,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1250410/Microsoft_Flight_Simulator_40th_Anniversary_Edition/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1250410" data-ds-itemkey="App_1250410" data-ds-tagids="[599,15045,4175,1695,3859,21978,4182]" data-ds-crtrids="[3090835]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1250410,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/capsule_sm_120.jpg?t=1689193265" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/capsule_sm_120.jpg?t=1689193265 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/capsule_231x87.jpg?t=1689193265 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Microsoft Flight Simulator 40th Anniversary Edition</span>
                    <div>
                                                <span class="platform_img win"></span><span class="vr_supported">VR Supported</span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">18 Aug, 2020</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Mostly Positive&lt;br&gt;78% of the 48,113 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="6999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="6999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">69,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/?snr=1_7_7_7000_150_1"
			 data-ds-appid="227300" data-ds-itemkey="App_227300" data-ds-tagids="[1644,10383,599,1695,1100687,4175,1669]" data-ds-crtrids="[4036972]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:227300,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/227300/capsule_sm_120.jpg?t=1691582130" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/227300/capsule_sm_120.jpg?t=1691582130 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/227300/capsule_231x87.jpg?t=1691582130 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Euro Truck Simulator 2</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">12 Oct, 2012</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Overwhelmingly Positive&lt;br&gt;97% of the 494,366 user reviews for this game are positive.&lt;br&gt;&lt;br&gt;This product has experienced one or more periods of off-topic review activity.  Based on your preferences, the reviews within these periods have been excluded from this product's Review Score.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1999">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="1999" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">19,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/238960/Path_of_Exile/?snr=1_7_7_7000_150_1"
			 data-ds-appid="238960" data-ds-itemkey="App_238960" data-ds-tagids="[113,4231,1646,122,3859,4236,1720]" data-ds-descids="[1,2,5]" data-ds-crtrids="[3820485]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:238960,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/238960/capsule_sm_120.jpg?t=1691442637" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/238960/capsule_sm_120.jpg?t=1691442637 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/238960/capsule_231x87.jpg?t=1691442637 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Path of Exile</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">23 Oct, 2013</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;88% of the 206,985 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="0">
                    <div class="col search_discount_and_price responsive_secondrow">
                                            </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1659040/HITMAN_3/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1659040" data-ds-itemkey="App_1659040" data-ds-tagids="[1687,19,4376,3810,4182,21978,4667]" data-ds-descids="[2,5]" data-ds-crtrids="[33519178,34140237]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1659040,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/capsule_sm_120.jpg?t=1693992811" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/capsule_sm_120.jpg?t=1693992811 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/capsule_231x87.jpg?t=1693992811 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">HITMAN 3</span>
                    <div>
                                                <span class="platform_img win"></span><span class="vr_supported">VR Supported</span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">20 Jan, 2022</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;84% of the 13,747 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="3499">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="3499" data-bundlediscount="0" data-discount="50"><div class="discount_pct">-50%</div><div class="discount_prices"><div class="discount_original_price">69,99€</div><div class="discount_final_price">34,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/?snr=1_7_7_7000_150_1"
			 data-ds-appid="2208920" data-ds-itemkey="App_2208920" data-ds-tagids="[19,1695,122,21,12095,4182,11634]" data-ds-descids="[1,2,5]" data-ds-crtrids="[33075774,185907]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:2208920,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/capsule_sm_120.jpg?t=1693578694" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/capsule_sm_120.jpg?t=1693578694 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/capsule_231x87.jpg?t=1693578694 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Assassin's Creed Valhalla</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">6 Dec, 2022</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary mixed" data-tooltip-html="Mixed&lt;br&gt;67% of the 11,678 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1499">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1499" data-bundlediscount="0" data-discount="75"><div class="discount_pct">-75%</div><div class="discount_prices"><div class="discount_original_price">59,99€</div><div class="discount_final_price">14,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/266410/iRacing/?snr=1_7_7_7000_150_1"
			 data-ds-appid="266410" data-ds-itemkey="App_266410" data-ds-tagids="[699,1100687,599,701,21978,1644,128]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:266410,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/266410/capsule_sm_120.jpg?t=1685469538" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/266410/capsule_sm_120.jpg?t=1685469538 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/266410/capsule_231x87.jpg?t=1685469538 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">iRacing</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">12 Jan, 2015</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;82% of the 1,837 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1099">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="1099" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">10,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/703080/Planet_Zoo/?snr=1_7_7_7000_150_1"
			 data-ds-appid="703080" data-ds-itemkey="App_703080" data-ds-tagids="[12472,599,1643,3810,30358,4328,4695]" data-ds-crtrids="[26299579]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:703080,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/703080/capsule_sm_120.jpg?t=1687255697" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/703080/capsule_sm_120.jpg?t=1687255697 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/703080/capsule_231x87.jpg?t=1687255697 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Planet Zoo</span>
                    <div>
                                                <span class="platform_img win"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">5 Nov, 2019</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;90% of the 60,132 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="4499">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="4499" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">44,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/275850/No_Mans_Sky/?snr=1_7_7_7000_150_1"
			 data-ds-appid="275850" data-ds-itemkey="App_275850" data-ds-tagids="[1695,1100689,1755,3834,3942,1662,5125]" data-ds-crtrids="[34051164]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:275850,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/275850/capsule_sm_120.jpg?t=1692895292" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/275850/capsule_sm_120.jpg?t=1692895292 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/275850/capsule_231x87.jpg?t=1692895292 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">No Man's Sky</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="vr_supported">VR Supported</span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">12 Aug, 2016</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Mostly Positive&lt;br&gt;76% of the 210,141 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="5899">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block no_discount" data-price-final="5899" data-bundlediscount="0" data-discount="0"><div class="discount_prices"><div class="discount_final_price">58,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/?snr=1_7_7_7000_150_1"
			 data-ds-appid="289070" data-ds-itemkey="App_289070" data-ds-tagids="[9,1741,3859,3987,4182,4364,1677]" data-ds-crtrids="[32844624,31936442,2428135,33339585]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:289070,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/289070/capsule_sm_120.jpg?t=1680898825" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/289070/capsule_sm_120.jpg?t=1680898825 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/289070/capsule_231x87.jpg?t=1680898825 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Sid Meier’s Civilization® VI</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">21 Oct, 2016</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;85% of the 201,417 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="599">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="599" data-bundlediscount="0" data-discount="90"><div class="discount_pct">-90%</div><div class="discount_prices"><div class="discount_original_price">59,99€</div><div class="discount_final_price">5,99€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            
				<a href="https://store.steampowered.com/app/1435790/Escape_Simulator/?snr=1_7_7_7000_150_1"
			 data-ds-appid="1435790" data-ds-itemkey="App_1435790" data-ds-tagids="[1664,1685,769306,3859,3839,21,7481]" data-ds-crtrids="[32969178]" onmouseover="GameHover( this, event, 'global_hover', {&quot;type&quot;:&quot;app&quot;,&quot;id&quot;:1435790,&quot;public&quot;:1,&quot;v6&quot;:1} );" onmouseout="HideGameHover( this, event, 'global_hover' )" class="search_result_row ds_collapse_flag "
		   data-search-page="1" data-gpnav="item"
		   data-ds-steam-deck-compat-handled="true">
            <div class="col search_capsule"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1435790/capsule_sm_120_alt_assets_11.jpg?t=1694095488" srcset="https://cdn.cloudflare.steamstatic.com/steam/apps/1435790/capsule_sm_120_alt_assets_11.jpg?t=1694095488 1x, https://cdn.cloudflare.steamstatic.com/steam/apps/1435790/capsule_231x87_alt_assets_11.jpg?t=1694095488 2x"></div>
            <div class="responsive_search_name_combined">
                <div class="col search_name ellipsis">
                    <span class="title">Escape Simulator</span>
                    <div>
                                                <span class="platform_img win"></span><span class="platform_img mac"></span><span class="platform_img linux"></span>                                            </div>
                </div>
                <div class="col search_released responsive_secondrow">19 Oct, 2021</div>
                <div class="col search_reviewscore responsive_secondrow">
                                            <span class="search_review_summary positive" data-tooltip-html="Very Positive&lt;br&gt;94% of the 10,481 user reviews for this game are positive.">
								</span>
                                    </div>


                <div class="col search_price_discount_combined responsive_secondrow" data-price-final="1004">
                    <div class="col search_discount_and_price responsive_secondrow">
                        <div class="discount_block search_discount_block" data-price-final="1004" data-bundlediscount="0" data-discount="33"><div class="discount_pct">-33%</div><div class="discount_prices"><div class="discount_original_price">14,99€</div><div class="discount_final_price">10,04€</div></div></div>                    </div>
                </div>
            </div>


            <div style="clear: left;"></div>
        </a>
            <!-- End List Items -->
        </div>

                <div class="search_pagination">
            <div class="search_pagination_left">
                showing 1 - 50 of 3250            </div>
            <div class="search_pagination_right">
                1&nbsp;&nbsp;						<a href="https://store.steampowered.com/search/?sort_by=&sort_order=0&filter=topsellers&supportedlang=english&page=2" onclick="SearchLinkClick( this ); return false;">2</a>
					&nbsp;&nbsp;						<a href="https://store.steampowered.com/search/?sort_by=&sort_order=0&filter=topsellers&supportedlang=english&page=3" onclick="SearchLinkClick( this ); return false;">3</a>
										&nbsp;...&nbsp;&nbsp;<a href="https://store.steampowered.com/search/?sort_by=&sort_order=0&filter=topsellers&supportedlang=english&page=65" onclick="SearchLinkClick( this ); return false;">65</a>
									&nbsp;<a href="https://store.steampowered.com/search/?sort_by=&sort_order=0&filter=topsellers&supportedlang=english&page=2" onclick="SearchLinkClick( this ); return false;" class="pagebtn">&gt;</a>
				            </div>
            <div style="clear: both;"></div>
        </div>

        <div id="search_results_loading" style="display: none">
            		<div class="LoadingWrapper">
			<div class="LoadingThrobber">
				<div class="Bar Bar1"></div>
				<div class="Bar Bar2"></div>
				<div class="Bar Bar3"></div>
			</div>
							<div class="LoadingText">Loading more content...</div>
					</div>
		        </div>

	</div>

			</div>
		</div>
		<div data-panel="{&quot;bFocusRingRoot&quot;:true,&quot;onMoveDown&quot;:&quot;BlockMovement&quot;,&quot;flow-children&quot;:&quot;column&quot;}" class="rightcol small responsive_local_menu autocollapse_enabled" id="additional_search_options" data-gpnav="rows" >

			

			<div class="block search_collapse_block" data-collapse-name="price">
				<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header labs_block_header">
					<div>Narrow by Price</div>
				</div>
				<div class="block_content block_content_inner" >
					<div class="range_container" style="margin-top: 8px;">
						<div class="range_container_inner">
							<input data-panel="{&quot;autoFocus&quot;:true,&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="range_input" type="range" id="price_range" min="0" max="13" step="1" value="13">
							<input id="maxprice_input" type="hidden" name="maxprice" value="">
						</div>
						<div class="range_display" id="price_range_display">
							&nbsp;
						</div>
						<script type="text/javascript">
							var rgPriceStopData = [{"price":"free","label":"Free"},{"price":5,"label":"Under 5,--\u20ac"},{"price":10,"label":"Under 10,--\u20ac"},{"price":15,"label":"Under 15,--\u20ac"},{"price":20,"label":"Under 20,--\u20ac"},{"price":25,"label":"Under 25,--\u20ac"},{"price":30,"label":"Under 30,--\u20ac"},{"price":35,"label":"Under 35,--\u20ac"},{"price":40,"label":"Under 40,--\u20ac"},{"price":45,"label":"Under 45,--\u20ac"},{"price":50,"label":"Under 50,--\u20ac"},{"price":55,"label":"Under 55,--\u20ac"},{"price":60,"label":"Under 60,--\u20ac"},{"price":null,"label":"Any Price"}];
							$J( function() {

								$J('#price_range').on( 'input', function() {
									$J('#maxprice_input').val( rgPriceStopData[this.value].price );
									$J('#price_range_display').text( rgPriceStopData[this.value].label );

									var $HideF2P = $J('.tab_filter_control_row[data-param=hidef2p]');
									if ( this.value == 0 )
									{
										$HideF2P.addClass( 'disabled' );
									}
									else
									{
										$HideF2P.removeClass( 'disabled' );
									}
								}).trigger('input');

								$J('#price_range').on( 'change', function() {
									$J('#maxprice_input').val( rgPriceStopData[this.value].price );
									AjaxSearchResults();
								});
							})

							function UpdatePriceRangeControl( maxprice )
							{
								var $Input = $J('#price_range');
								if ( !maxprice )
									$Input.val( 13 );
								else
								{
									for ( var i = 0; i < rgPriceStopData.length; i++ )
									{
										if ( rgPriceStopData[i].price == maxprice )
										{
											$Input.val( i );
											break;
										}
									}
								}
								$Input.trigger('input');
							}
						</script>
					</div>

					<div class="block_rule"></div>

					
	<div class="tab_filter_control_row " data-param="specials" data-value="__toggle" data-loc="Special Offers" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="specials" data-value="__toggle" data-loc="Special Offers" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Special Offers					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
						
	<div class="tab_filter_control_row " data-param="hidef2p" data-value="__toggle" data-loc="Hide free to play items" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="hidef2p" data-value="__toggle" data-loc="Hide free to play items" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hide free to play items					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
				</div>
			</div>

			
						
			<div class="block search_collapse_block" data-collapse-name="tags">
				<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header labs_block_header">
					<div>Narrow by tag</div>
				</div>
				<div class="block_content block_content_inner" >
					<div id="TagFilter_Container"  style="max-height: 150px; overflow: hidden;" >
						
	<div class="tab_filter_control_row " data-param="tags" data-value="492" data-loc="Indie" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="492" data-loc="Indie" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Indie					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="492" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Indie" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="19" data-loc="Action" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="19" data-loc="Action" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Action					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="19" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Action" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="21" data-loc="Adventure" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="21" data-loc="Adventure" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Adventure					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="21" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Adventure" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="597" data-loc="Casual" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="597" data-loc="Casual" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Casual					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="597" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Casual" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="122" data-loc="RPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="122" data-loc="RPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						RPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="122" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="RPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="599" data-loc="Simulation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="599" data-loc="Simulation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Simulation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="599" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Simulation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9" data-loc="Strategy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9" data-loc="Strategy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Strategy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Strategy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4182" data-loc="Singleplayer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4182" data-loc="Singleplayer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Singleplayer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4182" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Singleplayer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="493" data-loc="Early Access" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="493" data-loc="Early Access" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Early Access					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="493" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Early Access" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="113" data-loc="Free to Play" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="113" data-loc="Free to Play" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Free to Play					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="113" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Free to Play" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3871" data-loc="2D" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3871" data-loc="2D" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						2D					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3871" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="2D" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4191" data-loc="3D" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4191" data-loc="3D" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						3D					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4191" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="3D" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4166" data-loc="Atmospheric" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4166" data-loc="Atmospheric" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Atmospheric					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4166" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Atmospheric" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1684" data-loc="Fantasy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1684" data-loc="Fantasy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Fantasy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1684" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Fantasy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1742" data-loc="Story Rich" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1742" data-loc="Story Rich" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Story Rich					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1742" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Story Rich" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4305" data-loc="Colorful" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4305" data-loc="Colorful" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Colorful					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4305" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Colorful" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3859" data-loc="Multiplayer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3859" data-loc="Multiplayer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Multiplayer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3859" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Multiplayer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1664" data-loc="Puzzle" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1664" data-loc="Puzzle" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Puzzle					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1664" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Puzzle" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3964" data-loc="Pixel Graphics" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3964" data-loc="Pixel Graphics" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Pixel Graphics					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3964" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Pixel Graphics" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="128" data-loc="Massively Multiplayer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="128" data-loc="Massively Multiplayer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Massively Multiplayer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="128" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Massively Multiplayer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3834" data-loc="Exploration" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3834" data-loc="Exploration" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Exploration					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3834" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Exploration" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="701" data-loc="Sports" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="701" data-loc="Sports" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sports					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="701" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sports" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4726" data-loc="Cute" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4726" data-loc="Cute" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cute					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4726" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cute" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4667" data-loc="Violent" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4667" data-loc="Violent" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Violent					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4667" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Violent" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3839" data-loc="First-Person" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3839" data-loc="First-Person" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						First-Person					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3839" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="First-Person" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3993" data-loc="Combat" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3993" data-loc="Combat" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Combat					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3993" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Combat" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="699" data-loc="Racing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="699" data-loc="Racing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Racing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="699" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Racing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4085" data-loc="Anime" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4085" data-loc="Anime" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Anime					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4085" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Anime" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="12095" data-loc="Sexual Content" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="12095" data-loc="Sexual Content" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sexual Content					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="12095" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sexual Content" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6650" data-loc="Nudity" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6650" data-loc="Nudity" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Nudity					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6650" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Nudity" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1773" data-loc="Arcade" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1773" data-loc="Arcade" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Arcade					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1773" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Arcade" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4106" data-loc="Action-Adventure" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4106" data-loc="Action-Adventure" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Action-Adventure					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4106" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Action-Adventure" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4136" data-loc="Funny" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4136" data-loc="Funny" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Funny					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4136" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Funny" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3942" data-loc="Sci-fi" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3942" data-loc="Sci-fi" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sci-fi					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3942" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sci-fi" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1774" data-loc="Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1774" data-loc="Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1774" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1654" data-loc="Relaxing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1654" data-loc="Relaxing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Relaxing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1654" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Relaxing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4345" data-loc="Gore" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4345" data-loc="Gore" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Gore					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4345" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Gore" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1667" data-loc="Horror" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1667" data-loc="Horror" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Horror					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1667" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Horror" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4004" data-loc="Retro" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4004" data-loc="Retro" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Retro					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4004" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Retro" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5350" data-loc="Family Friendly" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5350" data-loc="Family Friendly" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Family Friendly					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5350" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Family Friendly" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1697" data-loc="Third Person" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1697" data-loc="Third Person" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Third Person					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1697" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Third Person" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7208" data-loc="Female Protagonist" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7208" data-loc="Female Protagonist" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Female Protagonist					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7208" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Female Protagonist" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7481" data-loc="Controller" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7481" data-loc="Controller" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Controller					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7481" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Controller" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4252" data-loc="Stylized" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4252" data-loc="Stylized" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Stylized					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4252" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Stylized" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1695" data-loc="Open World" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1695" data-loc="Open World" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Open World					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1695" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Open World" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1625" data-loc="Platformer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1625" data-loc="Platformer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Platformer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1625" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Platformer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1685" data-loc="Co-op" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1685" data-loc="Co-op" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Co-op					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1685" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Co-op" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1662" data-loc="Survival" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1662" data-loc="Survival" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Survival					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1662" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Survival" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1775" data-loc="PvP" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1775" data-loc="PvP" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						PvP					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1775" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="PvP" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4791" data-loc="Top-Down" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4791" data-loc="Top-Down" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Top-Down					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4791" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Top-Down" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6426" data-loc="Choices Matter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6426" data-loc="Choices Matter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Choices Matter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6426" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Choices Matter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4175" data-loc="Realistic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4175" data-loc="Realistic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Realistic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4175" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Realistic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1719" data-loc="Comedy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1719" data-loc="Comedy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Comedy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1719" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Comedy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6730" data-loc="PvE" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6730" data-loc="PvE" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						PvE					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6730" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="PvE" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3799" data-loc="Visual Novel" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3799" data-loc="Visual Novel" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Visual Novel					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3799" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Visual Novel" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4342" data-loc="Dark" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4342" data-loc="Dark" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dark					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4342" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dark" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4747" data-loc="Character Customization" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4747" data-loc="Character Customization" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Character Customization					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4747" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Character Customization" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3968" data-loc="Physics" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3968" data-loc="Physics" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Physics					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3968" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Physics" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4195" data-loc="Cartoony" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4195" data-loc="Cartoony" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cartoony					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4195" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cartoony" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5716" data-loc="Mystery" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5716" data-loc="Mystery" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mystery					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5716" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mystery" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7250" data-loc="Linear" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7250" data-loc="Linear" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Linear					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7250" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Linear" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1663" data-loc="FPS" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1663" data-loc="FPS" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						FPS					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1663" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="FPS" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3916" data-loc="Old School" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3916" data-loc="Old School" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Old School					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3916" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Old School" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5379" data-loc="2D Platformer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5379" data-loc="2D Platformer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						2D Platformer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5379" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="2D Platformer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6971" data-loc="Multiple Endings" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6971" data-loc="Multiple Endings" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Multiple Endings					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6971" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Multiple Endings" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3843" data-loc="Online Co-Op" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3843" data-loc="Online Co-Op" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Online Co-Op					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3843" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Online Co-Op" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4026" data-loc="Difficult" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4026" data-loc="Difficult" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Difficult					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4026" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Difficult" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="21978" data-loc="VR" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="21978" data-loc="VR" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						VR					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="21978" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="VR" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1721" data-loc="Psychological Horror" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1721" data-loc="Psychological Horror" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Psychological Horror					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1721" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Psychological Horror" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4057" data-loc="Magic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4057" data-loc="Magic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Magic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4057" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Magic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1756" data-loc="Great Soundtrack" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1756" data-loc="Great Soundtrack" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Great Soundtrack					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1756" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Great Soundtrack" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4172" data-loc="Medieval" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4172" data-loc="Medieval" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Medieval					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4172" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Medieval" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3810" data-loc="Sandbox" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3810" data-loc="Sandbox" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sandbox					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3810" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sandbox" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1708" data-loc="Tactical" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1708" data-loc="Tactical" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tactical					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1708" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tactical" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4231" data-loc="Action RPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4231" data-loc="Action RPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Action RPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4231" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Action RPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4295" data-loc="Futuristic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4295" data-loc="Futuristic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Futuristic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4295" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Futuristic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4094" data-loc="Minimalist" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4094" data-loc="Minimalist" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Minimalist					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4094" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Minimalist" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1755" data-loc="Space" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1755" data-loc="Space" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Space					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1755" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Space" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1643" data-loc="Building" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1643" data-loc="Building" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Building					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1643" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Building" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6815" data-loc="Hand-drawn" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6815" data-loc="Hand-drawn" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hand-drawn					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6815" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hand-drawn" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1698" data-loc="Point & Click" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1698" data-loc="Point & Click" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Point & Click					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1698" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Point & Click" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1702" data-loc="Crafting" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1702" data-loc="Crafting" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Crafting					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1702" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Crafting" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="12472" data-loc="Management" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="12472" data-loc="Management" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Management					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="12472" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Management" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4255" data-loc="Shoot 'Em Up" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4255" data-loc="Shoot 'Em Up" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Shoot 'Em Up					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4255" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Shoot 'Em Up" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1716" data-loc="Roguelike" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1716" data-loc="Roguelike" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Roguelike					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1716" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Roguelike" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5984" data-loc="Drama" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5984" data-loc="Drama" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Drama					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5984" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Drama" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4562" data-loc="Cartoon" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4562" data-loc="Cartoon" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cartoon					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4562" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cartoon" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7368" data-loc="Local Multiplayer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7368" data-loc="Local Multiplayer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Local Multiplayer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7368" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Local Multiplayer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="84" data-loc="Design & Illustration" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="84" data-loc="Design & Illustration" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Design & Illustration					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="84" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Design & Illustration" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3798" data-loc="Side Scroller" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3798" data-loc="Side Scroller" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Side Scroller					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3798" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Side Scroller" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3959" data-loc="Roguelite" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3959" data-loc="Roguelite" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Roguelite					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3959" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Roguelite" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8945" data-loc="Resource Management" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8945" data-loc="Resource Management" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Resource Management					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8945" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Resource Management" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5125" data-loc="Procedural Generation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5125" data-loc="Procedural Generation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Procedural Generation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5125" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Procedural Generation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4604" data-loc="Dark Fantasy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4604" data-loc="Dark Fantasy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dark Fantasy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4604" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dark Fantasy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6129" data-loc="Logic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6129" data-loc="Logic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Logic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6129" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Logic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5611" data-loc="Mature" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5611" data-loc="Mature" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mature					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5611" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mature" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5395" data-loc="3D Platformer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5395" data-loc="3D Platformer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						3D Platformer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5395" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="3D Platformer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3978" data-loc="Survival Horror" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3978" data-loc="Survival Horror" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Survival Horror					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3978" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Survival Horror" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4486" data-loc="Choose Your Own Adventure" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4486" data-loc="Choose Your Own Adventure" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Choose Your Own Adventure					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4486" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Choose Your Own Adventure" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1036" data-loc="Education" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1036" data-loc="Education" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Education					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1036" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Education" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5537" data-loc="Puzzle Platformer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5537" data-loc="Puzzle Platformer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Puzzle Platformer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5537" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Puzzle Platformer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4947" data-loc="Romance" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4947" data-loc="Romance" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Romance					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4947" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Romance" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4325" data-loc="Turn-Based Combat" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4325" data-loc="Turn-Based Combat" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Turn-Based Combat					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4325" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Turn-Based Combat" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7743" data-loc="1980s" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7743" data-loc="1980s" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						1980s					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7743" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="1980s" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5608" data-loc="Emotional" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5608" data-loc="Emotional" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Emotional					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5608" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Emotional" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="87" data-loc="Utilities" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="87" data-loc="Utilities" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Utilities					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="87" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Utilities" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1646" data-loc="Hack and Slash" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1646" data-loc="Hack and Slash" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hack and Slash					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1646" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hack and Slash" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1741" data-loc="Turn-Based Strategy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1741" data-loc="Turn-Based Strategy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Turn-Based Strategy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1741" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Turn-Based Strategy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9204" data-loc="Immersive Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9204" data-loc="Immersive Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Immersive Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9204" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Immersive Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1678" data-loc="War" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1678" data-loc="War" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						War					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1678" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="War" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="11014" data-loc="Interactive Fiction" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="11014" data-loc="Interactive Fiction" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Interactive Fiction					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="11014" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Interactive Fiction" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="14139" data-loc="Turn-Based Tactics" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="14139" data-loc="Turn-Based Tactics" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Turn-Based Tactics					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="14139" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Turn-Based Tactics" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="17389" data-loc="Tabletop" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="17389" data-loc="Tabletop" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tabletop					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="17389" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tabletop" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9130" data-loc="Hentai" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9130" data-loc="Hentai" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hentai					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9130" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hentai" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="30358" data-loc="Nature" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="30358" data-loc="Nature" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Nature					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="30358" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Nature" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3835" data-loc="Post-apocalyptic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3835" data-loc="Post-apocalyptic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Post-apocalyptic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3835" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Post-apocalyptic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1659" data-loc="Zombies" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1659" data-loc="Zombies" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Zombies					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1659" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Zombies" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7332" data-loc="Base Building" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7332" data-loc="Base Building" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Base Building					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7332" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Base Building" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9551" data-loc="Dating Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9551" data-loc="Dating Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dating Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9551" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dating Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="42804" data-loc="Action Roguelike" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="42804" data-loc="Action Roguelike" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Action Roguelike					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="42804" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Action Roguelike" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1738" data-loc="Hidden Object" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1738" data-loc="Hidden Object" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hidden Object					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1738" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hidden Object" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1710" data-loc="Surreal" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1710" data-loc="Surreal" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Surreal					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1710" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Surreal" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4434" data-loc="JRPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4434" data-loc="JRPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						JRPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4434" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="JRPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6691" data-loc="1990's" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6691" data-loc="1990's" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						1990's					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6691" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="1990's" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3841" data-loc="Local Co-Op" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3841" data-loc="Local Co-Op" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Local Co-Op					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3841" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Local Co-Op" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4885" data-loc="Bullet Hell" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4885" data-loc="Bullet Hell" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Bullet Hell					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4885" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Bullet Hell" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1720" data-loc="Dungeon Crawler" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1720" data-loc="Dungeon Crawler" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dungeon Crawler					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1720" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dungeon Crawler" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3987" data-loc="Historical" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3987" data-loc="Historical" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Historical					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3987" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Historical" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10695" data-loc="Party-Based RPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10695" data-loc="Party-Based RPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Party-Based RPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10695" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Party-Based RPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1687" data-loc="Stealth" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1687" data-loc="Stealth" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Stealth					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1687" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Stealth" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4711" data-loc="Replay Value" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4711" data-loc="Replay Value" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Replay Value					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4711" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Replay Value" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5094" data-loc="Narration" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5094" data-loc="Narration" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Narration					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5094" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Narration" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5900" data-loc="Walking Simulator" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5900" data-loc="Walking Simulator" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Walking Simulator					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5900" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Walking Simulator" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5154" data-loc="Score Attack" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5154" data-loc="Score Attack" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Score Attack					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5154" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Score Attack" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1677" data-loc="Turn-Based" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1677" data-loc="Turn-Based" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Turn-Based					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1677" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Turn-Based" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4168" data-loc="Military" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4168" data-loc="Military" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Military					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4168" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Military" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="24904" data-loc="NSFW" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="24904" data-loc="NSFW" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						NSFW					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="24904" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="NSFW" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4145" data-loc="Cinematic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4145" data-loc="Cinematic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cinematic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4145" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cinematic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="31275" data-loc="Text-Based" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="31275" data-loc="Text-Based" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Text-Based					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="31275" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Text-Based" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3814" data-loc="Third-Person Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3814" data-loc="Third-Person Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Third-Person Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3814" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Third-Person Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="15172" data-loc="Conversation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="15172" data-loc="Conversation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Conversation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="15172" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Conversation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4637" data-loc="Top-Down Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4637" data-loc="Top-Down Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Top-Down Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4637" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Top-Down Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="44868" data-loc="LGBTQ+" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="44868" data-loc="LGBTQ+" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						LGBTQ+					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="44868" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="LGBTQ+" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4975" data-loc="2.5D" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4975" data-loc="2.5D" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						2.5D					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4975" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="2.5D" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1673" data-loc="Aliens" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1673" data-loc="Aliens" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Aliens					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1673" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Aliens" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4115" data-loc="Cyberpunk" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4115" data-loc="Cyberpunk" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cyberpunk					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4115" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cyberpunk" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1038" data-loc="Web Publishing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1038" data-loc="Web Publishing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Web Publishing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1038" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Web Publishing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10397" data-loc="Memes" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10397" data-loc="Memes" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Memes					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10397" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Memes" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5851" data-loc="Isometric" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5851" data-loc="Isometric" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Isometric					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5851" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Isometric" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8369" data-loc="Investigation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8369" data-loc="Investigation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Investigation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8369" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Investigation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5752" data-loc="Robots" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5752" data-loc="Robots" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Robots					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5752" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Robots" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5711" data-loc="Team-Based" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5711" data-loc="Team-Based" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Team-Based					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5711" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Team-Based" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5923" data-loc="Dark Humor" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5923" data-loc="Dark Humor" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dark Humor					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5923" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dark Humor" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6869" data-loc="Nonlinear" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6869" data-loc="Nonlinear" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Nonlinear					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6869" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Nonlinear" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1666" data-loc="Card Game" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1666" data-loc="Card Game" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Card Game					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1666" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Card Game" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6276" data-loc="Inventory Management" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6276" data-loc="Inventory Management" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Inventory Management					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6276" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Inventory Management" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1676" data-loc="RTS" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1676" data-loc="RTS" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						RTS					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1676" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="RTS" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3854" data-loc="Lore-Rich" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3854" data-loc="Lore-Rich" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Lore-Rich					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3854" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Lore-Rich" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7926" data-loc="Artificial Intelligence" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7926" data-loc="Artificial Intelligence" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Artificial Intelligence					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7926" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Artificial Intelligence" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10235" data-loc="Life Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10235" data-loc="Life Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Life Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10235" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Life Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="12057" data-loc="Tutorial" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="12057" data-loc="Tutorial" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tutorial					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="12057" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tutorial" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9541" data-loc="Demons" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9541" data-loc="Demons" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Demons					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9541" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Demons" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="17305" data-loc="Strategy RPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="17305" data-loc="Strategy RPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Strategy RPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="17305" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Strategy RPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="379975" data-loc="Clicker" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="379975" data-loc="Clicker" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Clicker					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="379975" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Clicker" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4400" data-loc="Abstract" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4400" data-loc="Abstract" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Abstract					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4400" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Abstract" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5186" data-loc="Psychological" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5186" data-loc="Psychological" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Psychological					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5186" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Psychological" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4064" data-loc="Thriller" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4064" data-loc="Thriller" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Thriller					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4064" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Thriller" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1759" data-loc="Perma Death" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1759" data-loc="Perma Death" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Perma Death					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1759" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Perma Death" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5547" data-loc="Arena Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5547" data-loc="Arena Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Arena Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5547" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Arena Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4695" data-loc="Economy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4695" data-loc="Economy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Economy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4695" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Economy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3813" data-loc="Real Time Tactics" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3813" data-loc="Real Time Tactics" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Real Time Tactics					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3813" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Real Time Tactics" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1734" data-loc="Fast-Paced" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1734" data-loc="Fast-Paced" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Fast-Paced					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1734" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Fast-Paced" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5613" data-loc="Detective" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5613" data-loc="Detective" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Detective					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5613" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Detective" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10808" data-loc="Supernatural" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10808" data-loc="Supernatural" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Supernatural					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10808" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Supernatural" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1644" data-loc="Driving" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1644" data-loc="Driving" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Driving					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1644" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Driving" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1770" data-loc="Board Game" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1770" data-loc="Board Game" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Board Game					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1770" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Board Game" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4234" data-loc="Short" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4234" data-loc="Short" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Short					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4234" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Short" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5673" data-loc="Modern" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5673" data-loc="Modern" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Modern					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5673" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Modern" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="872" data-loc="Animation & Modeling" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="872" data-loc="Animation & Modeling" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Animation & Modeling					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="872" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Animation & Modeling" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5030" data-loc="Dystopian " data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5030" data-loc="Dystopian " data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dystopian 					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5030" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dystopian " data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3877" data-loc="Precision Platformer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3877" data-loc="Precision Platformer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Precision Platformer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3877" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Precision Platformer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="16689" data-loc="Time Management" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="16689" data-loc="Time Management" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Time Management					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="16689" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Time Management" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8013" data-loc="Software" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8013" data-loc="Software" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Software					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8013" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Software" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4840" data-loc="4 Player Local" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4840" data-loc="4 Player Local" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						4 Player Local					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4840" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="4 Player Local" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1714" data-loc="Psychedelic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1714" data-loc="Psychedelic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Psychedelic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1714" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Psychedelic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1645" data-loc="Tower Defense" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1645" data-loc="Tower Defense" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tower Defense					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1645" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tower Defense" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4236" data-loc="Loot" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4236" data-loc="Loot" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Loot					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4236" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Loot" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="21725" data-loc="Tactical RPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="21725" data-loc="Tactical RPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tactical RPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="21725" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tactical RPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="15045" data-loc="Flight" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="15045" data-loc="Flight" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Flight					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="15045" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Flight" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4328" data-loc="City Builder" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4328" data-loc="City Builder" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						City Builder					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4328" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="City Builder" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1693" data-loc="Classic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1693" data-loc="Classic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Classic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1693" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Classic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="29482" data-loc="Souls-like" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="29482" data-loc="Souls-like" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Souls-like					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="29482" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Souls-like" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1751" data-loc="Comic Book" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1751" data-loc="Comic Book" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Comic Book					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1751" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Comic Book" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1621" data-loc="Music" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1621" data-loc="Music" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Music					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1621" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Music" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4684" data-loc="Wargame" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4684" data-loc="Wargame" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Wargame					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4684" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Wargame" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4158" data-loc="Beat 'em up" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4158" data-loc="Beat 'em up" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Beat 'em up					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4158" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Beat 'em up" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1628" data-loc="Metroidvania" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1628" data-loc="Metroidvania" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Metroidvania					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1628" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Metroidvania" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4598" data-loc="Alternate History" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4598" data-loc="Alternate History" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Alternate History					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4598" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Alternate History" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5577" data-loc="RPGMaker" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5577" data-loc="RPGMaker" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						RPGMaker					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5577" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="RPGMaker" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7948" data-loc="Soundtrack" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7948" data-loc="Soundtrack" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Soundtrack					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7948" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Soundtrack" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5363" data-loc="Destruction" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5363" data-loc="Destruction" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Destruction					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5363" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Destruction" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1669" data-loc="Moddable" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1669" data-loc="Moddable" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Moddable					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1669" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Moddable" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4700" data-loc="Movie" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4700" data-loc="Movie" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Movie					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4700" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Movie" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="16094" data-loc="Mythology" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="16094" data-loc="Mythology" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mythology					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="16094" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mythology" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8122" data-loc="Level Editor" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8122" data-loc="Level Editor" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Level Editor					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8122" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Level Editor" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1743" data-loc="Fighting" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1743" data-loc="Fighting" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Fighting					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1743" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Fighting" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5652" data-loc="Collectathon" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5652" data-loc="Collectathon" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Collectathon					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5652" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Collectathon" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8666" data-loc="Runner" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8666" data-loc="Runner" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Runner					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8666" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Runner" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="13782" data-loc="Experimental" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="13782" data-loc="Experimental" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Experimental					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="13782" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Experimental" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5411" data-loc="Beautiful" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5411" data-loc="Beautiful" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Beautiful					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5411" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Beautiful" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="13906" data-loc="Game Development" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="13906" data-loc="Game Development" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Game Development					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="13906" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Game Development" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7569" data-loc="Grid-Based Movement" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7569" data-loc="Grid-Based Movement" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Grid-Based Movement					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7569" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Grid-Based Movement" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6378" data-loc="Crime" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6378" data-loc="Crime" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Crime					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6378" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Crime" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4036" data-loc="Parkour" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4036" data-loc="Parkour" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Parkour					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4036" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Parkour" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4736" data-loc="2D Fighter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4736" data-loc="2D Fighter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						2D Fighter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4736" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="2D Fighter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="615955" data-loc="Idler" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="615955" data-loc="Idler" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Idler					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="615955" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Idler" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4474" data-loc="CRPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4474" data-loc="CRPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						CRPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4474" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="CRPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="32322" data-loc="Deckbuilding" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="32322" data-loc="Deckbuilding" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Deckbuilding					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="32322" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Deckbuilding" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="784" data-loc="Video Production" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="784" data-loc="Video Production" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Video Production					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="784" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Video Production" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1027" data-loc="Audio Production" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1027" data-loc="Audio Production" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Audio Production					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1027" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Audio Production" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4155" data-loc="Class-Based" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4155" data-loc="Class-Based" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Class-Based					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4155" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Class-Based" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3878" data-loc="Competitive" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3878" data-loc="Competitive" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Competitive					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3878" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Competitive" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1754" data-loc="MMORPG" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1754" data-loc="MMORPG" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						MMORPG					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1754" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="MMORPG" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="19995" data-loc="Dark Comedy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="19995" data-loc="Dark Comedy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dark Comedy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="19995" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dark Comedy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="15277" data-loc="Philosophical" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="15277" data-loc="Philosophical" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Philosophical					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="15277" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Philosophical" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5765" data-loc="Gun Customization" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5765" data-loc="Gun Customization" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Gun Customization					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5765" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Gun Customization" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="791774" data-loc="Card Battler" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="791774" data-loc="Card Battler" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Card Battler					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="791774" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Card Battler" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4758" data-loc="Twin Stick Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4758" data-loc="Twin Stick Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Twin Stick Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4758" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Twin Stick Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5794" data-loc="Science" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5794" data-loc="Science" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Science					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5794" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Science" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4150" data-loc="World War II" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4150" data-loc="World War II" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						World War II					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4150" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="World War II" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1100687" data-loc="Automobile Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1100687" data-loc="Automobile Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Automobile Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1100687" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Automobile Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4508" data-loc="Co-op Campaign" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4508" data-loc="Co-op Campaign" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Co-op Campaign					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4508" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Co-op Campaign" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="17894" data-loc="Cats" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="17894" data-loc="Cats" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cats					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="17894" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cats" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="11104" data-loc="Vehicular Combat" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="11104" data-loc="Vehicular Combat" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Vehicular Combat					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="11104" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Vehicular Combat" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1752" data-loc="Rhythm" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1752" data-loc="Rhythm" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Rhythm					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1752" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Rhythm" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4608" data-loc="Swordplay" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4608" data-loc="Swordplay" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Swordplay					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4608" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Swordplay" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="16598" data-loc="Space Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="16598" data-loc="Space Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Space Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="16598" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Space Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6506" data-loc="3D Fighter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6506" data-loc="3D Fighter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						3D Fighter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6506" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="3D Fighter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4364" data-loc="Grand Strategy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4364" data-loc="Grand Strategy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Grand Strategy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4364" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Grand Strategy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4046" data-loc="Dragons" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4046" data-loc="Dragons" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dragons					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4046" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dragons" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7432" data-loc="Lovecraftian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7432" data-loc="Lovecraftian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Lovecraftian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7432" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Lovecraftian" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="176981" data-loc="Battle Royale" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="176981" data-loc="Battle Royale" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Battle Royale					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="176981" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Battle Royale" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5055" data-loc="eSports" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5055" data-loc="eSports" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						eSports					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5055" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="eSports" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4835" data-loc="6DOF" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4835" data-loc="6DOF" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						6DOF					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4835" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="6DOF" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4845" data-loc="Capitalism" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4845" data-loc="Capitalism" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Capitalism					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4845" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Capitalism" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="29363" data-loc="3D Vision" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="29363" data-loc="3D Vision" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						3D Vision					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="29363" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="3D Vision" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="13190" data-loc="America" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="13190" data-loc="America" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						America					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="13190" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="America" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10816" data-loc="Split Screen" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10816" data-loc="Split Screen" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Split Screen					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10816" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Split Screen" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6052" data-loc="Noir" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6052" data-loc="Noir" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Noir					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6052" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Noir" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="255534" data-loc="Automation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="255534" data-loc="Automation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Automation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="255534" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Automation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5372" data-loc="Conspiracy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5372" data-loc="Conspiracy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Conspiracy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5372" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Conspiracy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1665" data-loc="Match 3" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1665" data-loc="Match 3" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Match 3					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1665" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Match 3" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1445" data-loc="Software Training" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1445" data-loc="Software Training" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Software Training					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1445" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Software Training" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4878" data-loc="Parody " data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4878" data-loc="Parody " data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Parody 					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4878" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Parody " data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="916648" data-loc="Creature Collector" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="916648" data-loc="Creature Collector" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Creature Collector					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="916648" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Creature Collector" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5228" data-loc="Blood" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5228" data-loc="Blood" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Blood					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5228" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Blood" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5796" data-loc="Bullet Time" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5796" data-loc="Bullet Time" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Bullet Time					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5796" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Bullet Time" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="220585" data-loc="Colony Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="220585" data-loc="Colony Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Colony Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="220585" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Colony Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="87918" data-loc="Farming Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="87918" data-loc="Farming Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Farming Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="87918" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Farming Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4202" data-loc="Trading" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4202" data-loc="Trading" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Trading					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4202" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Trading" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3955" data-loc="Character Action Game" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3955" data-loc="Character Action Game" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Character Action Game					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3955" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Character Action Game" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4559" data-loc="Quick-Time Events" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4559" data-loc="Quick-Time Events" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Quick-Time Events					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4559" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Quick-Time Events" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1651" data-loc="Satire" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1651" data-loc="Satire" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Satire					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1651" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Satire" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="198631" data-loc="Mystery Dungeon" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="198631" data-loc="Mystery Dungeon" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mystery Dungeon					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="198631" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mystery Dungeon" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="620519" data-loc="Hero Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="620519" data-loc="Hero Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hero Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="620519" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hero Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6625" data-loc="Time Manipulation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6625" data-loc="Time Manipulation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Time Manipulation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6625" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Time Manipulation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9592" data-loc="Dynamic Narration" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9592" data-loc="Dynamic Narration" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dynamic Narration					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9592" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dynamic Narration" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="353880" data-loc="Looter Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="353880" data-loc="Looter Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Looter Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="353880" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Looter Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1100689" data-loc="Open World Survival Craft" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1100689" data-loc="Open World Survival Craft" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Open World Survival Craft					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1100689" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Open World Survival Craft" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3952" data-loc="Gothic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3952" data-loc="Gothic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Gothic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3952" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Gothic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="21006" data-loc="Underground" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="21006" data-loc="Underground" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Underground					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="21006" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Underground" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="22602" data-loc="Agriculture" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="22602" data-loc="Agriculture" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Agriculture					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="22602" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Agriculture" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="24003" data-loc="Word Game" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="24003" data-loc="Word Game" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Word Game					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="24003" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Word Game" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3920" data-loc="Cooking" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3920" data-loc="Cooking" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cooking					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3920" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cooking" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1732" data-loc="Voxel" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1732" data-loc="Voxel" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Voxel					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1732" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Voxel" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4190" data-loc="Addictive" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4190" data-loc="Addictive" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Addictive					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4190" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Addictive" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4853" data-loc="Political" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4853" data-loc="Political" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Political					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4853" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Political" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1777" data-loc="Steampunk" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1777" data-loc="Steampunk" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Steampunk					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1777" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Steampunk" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4777" data-loc="Spectacle fighter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4777" data-loc="Spectacle fighter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Spectacle fighter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4777" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Spectacle fighter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6915" data-loc="Martial Arts" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6915" data-loc="Martial Arts" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Martial Arts					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6915" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Martial Arts" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5981" data-loc="Mining" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5981" data-loc="Mining" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mining					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5981" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mining" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4821" data-loc="Mechs" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4821" data-loc="Mechs" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mechs					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4821" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mechs" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7478" data-loc="Illuminati" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7478" data-loc="Illuminati" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Illuminati					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7478" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Illuminati" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10679" data-loc="Time Travel" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10679" data-loc="Time Travel" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Time Travel					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10679" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Time Travel" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4102" data-loc="Combat Racing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4102" data-loc="Combat Racing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Combat Racing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4102" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Combat Racing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9564" data-loc="Hunting" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9564" data-loc="Hunting" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hunting					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9564" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hunting" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="31579" data-loc="Otome" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="31579" data-loc="Otome" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Otome					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="31579" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Otome" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1638" data-loc="Dog" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1638" data-loc="Dog" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dog					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1638" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dog" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="13070" data-loc="Solitaire" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="13070" data-loc="Solitaire" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Solitaire					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="13070" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Solitaire" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1718" data-loc="MOBA" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1718" data-loc="MOBA" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						MOBA					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1718" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="MOBA" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1681" data-loc="Pirates" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1681" data-loc="Pirates" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Pirates					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1681" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Pirates" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="13276" data-loc="Tanks" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="13276" data-loc="Tanks" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tanks					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="13276" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tanks" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="17770" data-loc="Asynchronous Multiplayer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="17770" data-loc="Asynchronous Multiplayer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Asynchronous Multiplayer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="17770" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Asynchronous Multiplayer" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5300" data-loc="God Game" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5300" data-loc="God Game" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						God Game					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5300" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="God Game" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1688" data-loc="Ninja" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1688" data-loc="Ninja" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Ninja					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1688" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Ninja" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4018" data-loc="Vampire" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4018" data-loc="Vampire" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Vampire					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4018" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Vampire" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5502" data-loc="Hacking" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5502" data-loc="Hacking" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hacking					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5502" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hacking" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1084988" data-loc="Auto Battler" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1084988" data-loc="Auto Battler" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Auto Battler					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1084988" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Auto Battler" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="15564" data-loc="Fishing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="15564" data-loc="Fishing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Fishing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="15564" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Fishing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="809" data-loc="Photo Editing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="809" data-loc="Photo Editing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Photo Editing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="809" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Photo Editing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1717" data-loc="Hex Grid" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1717" data-loc="Hex Grid" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hex Grid					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1717" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hex Grid" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9271" data-loc="Trading Card Game" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9271" data-loc="Trading Card Game" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Trading Card Game					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9271" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Trading Card Game" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5708" data-loc="Remake" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5708" data-loc="Remake" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Remake					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5708" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Remake" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3934" data-loc="Immersive" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3934" data-loc="Immersive" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Immersive					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3934" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Immersive" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="11123" data-loc="Mouse only" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="11123" data-loc="Mouse only" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mouse only					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="11123" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mouse only" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="18594" data-loc="FMV" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="18594" data-loc="FMV" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						FMV					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="18594" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="FMV" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4754" data-loc="Politics" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4754" data-loc="Politics" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Politics					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4754" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Politics" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7702" data-loc="Narrative" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7702" data-loc="Narrative" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Narrative					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7702" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Narrative" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4376" data-loc="Assassin" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4376" data-loc="Assassin" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Assassin					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4376" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Assassin" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4161" data-loc="Real-Time" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4161" data-loc="Real-Time" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Real-Time					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4161" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Real-Time" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1723" data-loc="Action RTS" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1723" data-loc="Action RTS" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Action RTS					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1723" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Action RTS" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4242" data-loc="Episodic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4242" data-loc="Episodic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Episodic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4242" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Episodic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1671" data-loc="Superhero" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1671" data-loc="Superhero" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Superhero					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1671" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Superhero" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9157" data-loc="Underwater" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9157" data-loc="Underwater" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Underwater					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9157" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Underwater" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1670" data-loc="4X" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1670" data-loc="4X" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						4X					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1670" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="4X" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5179" data-loc="Cold War" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5179" data-loc="Cold War" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cold War					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5179" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cold War" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7782" data-loc="Cult Classic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7782" data-loc="Cult Classic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cult Classic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7782" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cult Classic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="180368" data-loc="Faith" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="180368" data-loc="Faith" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Faith					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="180368" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Faith" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3965" data-loc="Epic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3965" data-loc="Epic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Epic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3965" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Epic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5160" data-loc="Dinosaurs" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5160" data-loc="Dinosaurs" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dinosaurs					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5160" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dinosaurs" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5432" data-loc="Programming" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5432" data-loc="Programming" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Programming					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5432" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Programming" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1730" data-loc="Sokoban" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1730" data-loc="Sokoban" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sokoban					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1730" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sokoban" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="26921" data-loc="Political Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="26921" data-loc="Political Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Political Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="26921" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Political Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1647" data-loc="Western" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1647" data-loc="Western" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Western					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1647" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Western" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1680" data-loc="Heist" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1680" data-loc="Heist" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Heist					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1680" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Heist" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7178" data-loc="Party Game" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7178" data-loc="Party Game" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Party Game					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7178" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Party Game" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7108" data-loc="Party" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7108" data-loc="Party" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Party					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7108" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Party" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10383" data-loc="Transportation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10383" data-loc="Transportation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Transportation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10383" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Transportation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6910" data-loc="Naval" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6910" data-loc="Naval" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Naval					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6910" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Naval" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6310" data-loc="Diplomacy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6310" data-loc="Diplomacy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Diplomacy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6310" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Diplomacy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1616" data-loc="Trains" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1616" data-loc="Trains" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Trains					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1616" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Trains" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="13382" data-loc="Archery" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="13382" data-loc="Archery" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Archery					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="13382" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Archery" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8093" data-loc="Minigames" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8093" data-loc="Minigames" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Minigames					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8093" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Minigames" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="51306" data-loc="Foreign" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="51306" data-loc="Foreign" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Foreign					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="51306" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Foreign" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="16250" data-loc="Gambling" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="16250" data-loc="Gambling" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Gambling					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="16250" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Gambling" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9803" data-loc="Snow" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9803" data-loc="Snow" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Snow					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9803" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Snow" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7107" data-loc="Real-Time with Pause" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7107" data-loc="Real-Time with Pause" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Real-Time with Pause					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7107" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Real-Time with Pause" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4994" data-loc="Naval Combat" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4994" data-loc="Naval Combat" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Naval Combat					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4994" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Naval Combat" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="97376" data-loc="Cozy" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="97376" data-loc="Cozy" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cozy					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="97376" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cozy" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4137" data-loc="Transhumanism" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4137" data-loc="Transhumanism" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Transhumanism					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4137" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Transhumanism" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1674" data-loc="Typing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1674" data-loc="Typing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Typing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1674" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Typing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="552282" data-loc="Wholesome" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="552282" data-loc="Wholesome" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Wholesome					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="552282" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Wholesome" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="769306" data-loc="Escape Room" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="769306" data-loc="Escape Room" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Escape Room					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="769306" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Escape Room" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="13577" data-loc="Sailing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="13577" data-loc="Sailing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sailing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="13577" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sailing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="14153" data-loc="Dungeons & Dragons" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="14153" data-loc="Dungeons & Dragons" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dungeons & Dragons					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="14153" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Dungeons & Dragons" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="11333" data-loc="Villain Protagonist" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="11333" data-loc="Villain Protagonist" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Villain Protagonist					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="11333" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Villain Protagonist" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1091588" data-loc="Roguelike Deckbuilder" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1091588" data-loc="Roguelike Deckbuilder" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Roguelike Deckbuilder					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1091588" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Roguelike Deckbuilder" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5230" data-loc="Sequel" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5230" data-loc="Sequel" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sequel					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5230" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sequel" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7423" data-loc="Sniper" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7423" data-loc="Sniper" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sniper					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7423" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Sniper" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5153" data-loc="Kickstarter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5153" data-loc="Kickstarter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Kickstarter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5153" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Kickstarter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="56690" data-loc="On-Rails Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="56690" data-loc="On-Rails Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						On-Rails Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="56690" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="On-Rails Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="14720" data-loc="Nostalgia" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="14720" data-loc="Nostalgia" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Nostalgia					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="14720" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Nostalgia" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8253" data-loc="Music-Based Procedural Generation" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8253" data-loc="Music-Based Procedural Generation" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Music-Based Procedural Generation					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8253" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Music-Based Procedural Generation" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5348" data-loc="Mod" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5348" data-loc="Mod" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mod					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5348" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mod" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="454187" data-loc="Traditional Roguelike" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="454187" data-loc="Traditional Roguelike" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Traditional Roguelike					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="454187" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Traditional Roguelike" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6702" data-loc="Mars" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6702" data-loc="Mars" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mars					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6702" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mars" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="17015" data-loc="Werewolves" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="17015" data-loc="Werewolves" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Werewolves					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="17015" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Werewolves" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7622" data-loc="Offroad" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7622" data-loc="Offroad" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Offroad					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7622" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Offroad" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1254546" data-loc="Football (Soccer)" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1254546" data-loc="Football (Soccer)" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Football (Soccer)					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1254546" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Football (Soccer)" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="9994" data-loc="Experience" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="9994" data-loc="Experience" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Experience					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="9994" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Experience" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5390" data-loc="Time Attack" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5390" data-loc="Time Attack" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Time Attack					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5390" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Time Attack" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="25085" data-loc="Touch-Friendly" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="25085" data-loc="Touch-Friendly" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Touch-Friendly					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="25085" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Touch-Friendly" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="10437" data-loc="Trivia" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="10437" data-loc="Trivia" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Trivia					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="10437" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Trivia" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="776177" data-loc="360 Video" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="776177" data-loc="360 Video" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						360 Video					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="776177" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="360 Video" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1649" data-loc="GameMaker" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1649" data-loc="GameMaker" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						GameMaker					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1649" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="GameMaker" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5382" data-loc="World War I" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5382" data-loc="World War I" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						World War I					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5382" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="World War I" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6041" data-loc="Horses" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6041" data-loc="Horses" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Horses					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6041" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Horses" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4520" data-loc="Farming" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4520" data-loc="Farming" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Farming					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4520" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Farming" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="12190" data-loc="Boxing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="12190" data-loc="Boxing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Boxing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="12190" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Boxing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5310" data-loc="Games Workshop" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5310" data-loc="Games Workshop" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Games Workshop					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5310" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Games Workshop" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="150626" data-loc="Gaming" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="150626" data-loc="Gaming" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Gaming					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="150626" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Gaming" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="92092" data-loc="Jet" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="92092" data-loc="Jet" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Jet					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="92092" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Jet" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1100686" data-loc="Outbreak Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1100686" data-loc="Outbreak Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Outbreak Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1100686" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Outbreak Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="15339" data-loc="Documentary" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="15339" data-loc="Documentary" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Documentary					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="15339" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Documentary" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4184" data-loc="Chess" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4184" data-loc="Chess" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Chess					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4184" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Chess" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="4291" data-loc="Spaceships" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="4291" data-loc="Spaceships" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Spaceships					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="4291" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Spaceships" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="15954" data-loc="Silent Protagonist" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="15954" data-loc="Silent Protagonist" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Silent Protagonist					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="15954" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Silent Protagonist" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1733" data-loc="Unforgiving" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1733" data-loc="Unforgiving" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Unforgiving					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1733" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Unforgiving" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="198913" data-loc="Motorbike" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="198913" data-loc="Motorbike" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Motorbike					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="198913" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Motorbike" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1100688" data-loc="Medical Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1100688" data-loc="Medical Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Medical Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1100688" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Medical Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7038" data-loc="Golf" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7038" data-loc="Golf" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Golf					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7038" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Golf" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="71389" data-loc="Spelling" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="71389" data-loc="Spelling" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Spelling					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="71389" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Spelling" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1736" data-loc="LEGO" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1736" data-loc="LEGO" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						LEGO					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1736" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="LEGO" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="856791" data-loc="Asymmetric VR" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="856791" data-loc="Asymmetric VR" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Asymmetric VR					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="856791" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Asymmetric VR" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6948" data-loc="Rome" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6948" data-loc="Rome" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Rome					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6948" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Rome" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="123332" data-loc="Bikes" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="123332" data-loc="Bikes" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Bikes					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="123332" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Bikes" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="922563" data-loc="Roguevania" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="922563" data-loc="Roguevania" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Roguevania					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="922563" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Roguevania" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="19780" data-loc="Submarine" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="19780" data-loc="Submarine" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Submarine					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="19780" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Submarine" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="61357" data-loc="Electronic Music" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="61357" data-loc="Electronic Music" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Electronic Music					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="61357" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Electronic Music" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7113" data-loc="Crowdfunded" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7113" data-loc="Crowdfunded" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Crowdfunded					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7113" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Crowdfunded" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="29855" data-loc="Ambient" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="29855" data-loc="Ambient" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Ambient					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="29855" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Ambient" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1746" data-loc="Basketball" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1746" data-loc="Basketball" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Basketball					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1746" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Basketball" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1254552" data-loc="Football (American)" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1254552" data-loc="Football (American)" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Football (American)					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1254552" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Football (American)" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6621" data-loc="Pinball" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6621" data-loc="Pinball" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Pinball					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6621" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Pinball" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="745697" data-loc="Social Deduction" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="745697" data-loc="Social Deduction" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Social Deduction					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="745697" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Social Deduction" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="189941" data-loc="Instrumental Music" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="189941" data-loc="Instrumental Music" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Instrumental Music					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="189941" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Instrumental Music" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="22955" data-loc="Mini Golf" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="22955" data-loc="Mini Golf" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mini Golf					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="22955" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mini Golf" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8075" data-loc="TrackIR" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8075" data-loc="TrackIR" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						TrackIR					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8075" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="TrackIR" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="12286" data-loc="Warhammer 40K" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="12286" data-loc="Warhammer 40K" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Warhammer 40K					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="12286" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Warhammer 40K" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1753" data-loc="Skateboarding" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1753" data-loc="Skateboarding" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Skateboarding					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1753" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Skateboarding" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="47827" data-loc="Wrestling" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="47827" data-loc="Wrestling" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Wrestling					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="47827" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Wrestling" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="11634" data-loc="Vikings" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="11634" data-loc="Vikings" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Vikings					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="11634" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Vikings" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="17927" data-loc="Pool" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="17927" data-loc="Pool" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Pool					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="17927" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Pool" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="337964" data-loc="Rock Music" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="337964" data-loc="Rock Music" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Rock Music					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="337964" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Rock Music" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="42089" data-loc="Jump Scare" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="42089" data-loc="Jump Scare" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Jump Scare					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="42089" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Jump Scare" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="3796" data-loc="Based On A Novel" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="3796" data-loc="Based On A Novel" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Based On A Novel					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="3796" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Based On A Novel" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5727" data-loc="Baseball" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5727" data-loc="Baseball" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Baseball					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5727" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Baseball" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="19568" data-loc="Cycling" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="19568" data-loc="Cycling" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cycling					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="19568" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cycling" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="96359" data-loc="Skating" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="96359" data-loc="Skating" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Skating					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="96359" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Skating" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5914" data-loc="Tennis" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5914" data-loc="Tennis" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tennis					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5914" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tennis" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="14906" data-loc="Intentionally Awkward Controls" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="14906" data-loc="Intentionally Awkward Controls" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Intentionally Awkward Controls					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="14906" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Intentionally Awkward Controls" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="15868" data-loc="Motocross" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="15868" data-loc="Motocross" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Motocross					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="15868" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Motocross" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="11095" data-loc="Boss Rush" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="11095" data-loc="Boss Rush" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Boss Rush					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="11095" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Boss Rush" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="117648" data-loc="8-bit Music" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="117648" data-loc="8-bit Music" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						8-bit Music					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="117648" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="8-bit Music" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7328" data-loc="Bowling" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7328" data-loc="Bowling" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Bowling					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7328" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Bowling" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="176733" data-loc="Tile-Matching" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="176733" data-loc="Tile-Matching" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tile-Matching					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="176733" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Tile-Matching" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="17337" data-loc="Lemmings" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="17337" data-loc="Lemmings" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Lemmings					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="17337" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Lemmings" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="324176" data-loc="Hockey" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="324176" data-loc="Hockey" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hockey					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="324176" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hockey" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="35079" data-loc="Job Simulator" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="35079" data-loc="Job Simulator" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Job Simulator					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="35079" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Job Simulator" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="348922" data-loc="Steam Machine" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="348922" data-loc="Steam Machine" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Steam Machine					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="348922" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Steam Machine" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="8461" data-loc="Well-Written" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="8461" data-loc="Well-Written" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Well-Written					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="8461" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Well-Written" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5407" data-loc="Benchmark" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5407" data-loc="Benchmark" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Benchmark					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5407" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Benchmark" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="603297" data-loc="Hardware" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="603297" data-loc="Hardware" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hardware					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="603297" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hardware" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="252854" data-loc="BMX" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="252854" data-loc="BMX" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						BMX					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="252854" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="BMX" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="28444" data-loc="Snowboarding" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="28444" data-loc="Snowboarding" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Snowboarding					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="28444" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Snowboarding" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="7309" data-loc="Skiing" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="7309" data-loc="Skiing" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Skiing					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="7309" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Skiing" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="129761" data-loc="ATV" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="129761" data-loc="ATV" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						ATV					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="129761" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="ATV" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="33572" data-loc="Mahjong" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="33572" data-loc="Mahjong" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mahjong					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="33572" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Mahjong" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="143739" data-loc="Electronic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="143739" data-loc="Electronic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Electronic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="143739" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Electronic" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="27758" data-loc="Voice Control" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="27758" data-loc="Voice Control" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Voice Control					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="27758" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Voice Control" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="233824" data-loc="Feature Film" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="233824" data-loc="Feature Film" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Feature Film					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="233824" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Feature Film" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="323922" data-loc="Musou" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="323922" data-loc="Musou" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Musou					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="323922" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Musou" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="91114" data-loc="Shop Keeper" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="91114" data-loc="Shop Keeper" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Shop Keeper					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="91114" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Shop Keeper" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="6214" data-loc="Birds" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="6214" data-loc="Birds" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Birds					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="6214" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Birds" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1199779" data-loc="Extraction Shooter" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1199779" data-loc="Extraction Shooter" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Extraction Shooter					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1199779" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Extraction Shooter" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="30927" data-loc="Fox" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="30927" data-loc="Fox" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Fox					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="30927" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Fox" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="49213" data-loc="Rugby" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="49213" data-loc="Rugby" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Rugby					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="49213" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Rugby" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="847164" data-loc="Volleyball" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="847164" data-loc="Volleyball" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Volleyball					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="847164" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Volleyball" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="42329" data-loc="Coding" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="42329" data-loc="Coding" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Coding					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="42329" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Coding" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="5941" data-loc="Reboot" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="5941" data-loc="Reboot" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Reboot					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="5941" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Reboot" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="158638" data-loc="Cricket" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="158638" data-loc="Cricket" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cricket					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="158638" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Cricket" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="1220528" data-loc="Hobby Sim" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="1220528" data-loc="Hobby Sim" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hobby Sim					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="1220528" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Hobby Sim" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="tags" data-value="363767" data-loc="Snooker" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="tags" data-value="363767" data-loc="Snooker" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Snooker					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="untags" data-value="363767" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="Snooker" data-clientside="0" data-tooltip-text="Exclude results with this tag" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
								<input type="hidden" id="tags" name="tags" value="" data-antifield='untags' />					</div>
					<input type="text" id="TagSuggest" class="search_filter_suggest">
					<script>
						$J( '#TagFilter_Container' ).tableFilter({ maxvisible: 15, control: '#TagSuggest', dataattribute: 'loc', 'defaultText': 'search for more tags' });
					</script>
				</div>
				<a class="see_all_expander nocollapse_only" href="#" onclick="ExpandOptions(this, 'TagFilter_Container'); return false;">See all</a>
			</div>

							<input type="hidden" id="untags" name="untags" value="" data-antifield='tags' />
			<div class="block search_collapse_block" data-collapse-name="category1" data-collapse-default="true">
				<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header"><div>Show selected types</div></div>
				<div class="block_content block_content_inner" id="narrow_category1" style="height: 150px;">
						<input type="hidden" id="category1" name="category1" value=""  />
	<div class="tab_filter_control_row " data-param="category1" data-value="998" data-loc="Games" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="998" data-loc="Games" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Games					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="994" data-loc="Software" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="994" data-loc="Software" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Software					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="21" data-loc="Downloadable Content" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="21" data-loc="Downloadable Content" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Downloadable Content					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="10" data-loc="Demos" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="10" data-loc="Demos" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Demos					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="990" data-loc="Soundtracks" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="990" data-loc="Soundtracks" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Soundtracks					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="989" data-loc="Playtests" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="989" data-loc="Playtests" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Playtests					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="992" data-loc="Videos" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="992" data-loc="Videos" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Videos					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="997" data-loc="Mods" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="997" data-loc="Mods" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mods					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="993" data-loc="Hardware" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="993" data-loc="Hardware" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hardware					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category1" data-value="996" data-loc="Include Bundles" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category1" data-value="996" data-loc="Include Bundles" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Include Bundles					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
					</div>
				<a class="see_all_expander nocollapse_only" href="#" onclick="ExpandOptions(this, 'narrow_category1'); return false;">See all</a>
			</div>
			<div class="block search_collapse_block" data-collapse-name="category3" data-collapse-default="true">
				<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header"><div>Narrow by number of players</div></div>
				<div class="block_content block_content_inner">
						<input type="hidden" id="category3" name="category3" value=""  />
	<div class="tab_filter_control_row " data-param="category3" data-value="2" data-loc="Single-player" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="2" data-loc="Single-player" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Single-player					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="1" data-loc="Multi-player" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="1" data-loc="Multi-player" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Multi-player					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="49" data-loc="PvP" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="49" data-loc="PvP" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						PvP					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="36" data-loc="Online PvP" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="36" data-loc="Online PvP" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Online PvP					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="47" data-loc="LAN PvP" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="47" data-loc="LAN PvP" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						LAN PvP					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="37" data-loc="Shared/Split Screen PvP" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="37" data-loc="Shared/Split Screen PvP" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Shared/Split Screen PvP					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="9" data-loc="Co-op" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="9" data-loc="Co-op" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Co-op					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="38" data-loc="Online Co-op" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="38" data-loc="Online Co-op" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Online Co-op					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="48" data-loc="LAN Co-op" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="48" data-loc="LAN Co-op" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						LAN Co-op					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="39" data-loc="Shared/Split Screen Co-op" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="39" data-loc="Shared/Split Screen Co-op" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Shared/Split Screen Co-op					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="24" data-loc="Shared/Split Screen" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="24" data-loc="Shared/Split Screen" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Shared/Split Screen					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category3" data-value="27" data-loc="Cross-Platform Multiplayer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category3" data-value="27" data-loc="Cross-Platform Multiplayer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cross-Platform Multiplayer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
				</div>
			</div>
			<div class="block search_collapse_block" data-collapse-name="category2" data-collapse-default="true">
				<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header"><div>Narrow by feature</div></div>
				<div class="block_content block_content_inner"  id="narrow_category2" style="height: 150px;">
						<input type="hidden" id="special_categories" name="special_categories" value=""  />
	<div class="tab_filter_control_row " data-param="special_categories" data-value="601" data-loc="Played with Steam Controller" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="special_categories" data-value="601" data-loc="Played with Steam Controller" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Played with Steam Controller					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
		<input type="hidden" id="category2" name="category2" value=""  />
	<div class="tab_filter_control_row " data-param="category2" data-value="50" data-loc="Additional High-Quality Audio" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="50" data-loc="Additional High-Quality Audio" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Additional High-Quality Audio					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="22" data-loc="Steam Achievements" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="22" data-loc="Steam Achievements" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Steam Achievements					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="28" data-loc="Full controller support" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="28" data-loc="Full controller support" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Full controller support					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="52" data-loc="Tracked Controller Support" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="52" data-loc="Tracked Controller Support" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tracked Controller Support					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="29" data-loc="Steam Trading Cards" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="29" data-loc="Steam Trading Cards" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Steam Trading Cards					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="13" data-loc="Captions available" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="13" data-loc="Captions available" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Captions available					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="51" data-loc="Steam Workshop" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="51" data-loc="Steam Workshop" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Steam Workshop					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="30" data-loc="Steam Workshop" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="30" data-loc="Steam Workshop" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Steam Workshop					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="40" data-loc="SteamVR Collectibles" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="40" data-loc="SteamVR Collectibles" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						SteamVR Collectibles					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="18" data-loc="Partial Controller Support" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="18" data-loc="Partial Controller Support" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Partial Controller Support					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="23" data-loc="Steam Cloud" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="23" data-loc="Steam Cloud" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Steam Cloud					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="8" data-loc="Valve Anti-Cheat enabled" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="8" data-loc="Valve Anti-Cheat enabled" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Valve Anti-Cheat enabled					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="16" data-loc="Includes Source SDK" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="16" data-loc="Includes Source SDK" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Includes Source SDK					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="41" data-loc="Remote Play on Phone" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="41" data-loc="Remote Play on Phone" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Remote Play on Phone					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="42" data-loc="Remote Play on Tablet" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="42" data-loc="Remote Play on Tablet" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Remote Play on Tablet					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="43" data-loc="Remote Play on TV" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="43" data-loc="Remote Play on TV" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Remote Play on TV					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="category2" data-value="44" data-loc="Remote Play Together" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="category2" data-value="44" data-loc="Remote Play Together" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Remote Play Together					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
				</div>
				<a class="see_all_expander nocollapse_only" href="#" onclick="ExpandOptions(this, 'narrow_category2'); return false;">See all</a>
			</div>
				<div data-panel="{&quot;focusable&quot;:false}" id="deck_compatibility_search_filter" class="block" data-collapse-name="deck_compatibility" data-collapse-default="false">
	<div class="block_header"><div>Narrow by Deck Compatibility</div></div>
		<div data-panel="{&quot;flow-children&quot;:&quot;row&quot;}" class="block_content block_content_inner" id="narrow_deck_compatibility">
				<input type="hidden" id="deck_compatibility" name="deck_compatibility" value=""  />
	<div class="tab_filter_control_row " data-param="deck_compatibility" data-value="3" data-loc="Verified" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="deck_compatibility" data-value="3" data-loc="Verified" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  data-tooltip-text="These games are fully functional on Steam Deck, and work great with the built-in controls and display."  >
						Verified					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="deck_compatibility" data-value="2" data-loc="Playable" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="deck_compatibility" data-value="2" data-loc="Playable" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  data-tooltip-text="These games are functional on Steam Deck, but might require extra effort to interact with or configure."  >
						Playable					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
			<a id="deck_compat_learn_more_btn" href="https://steamdeck.com/en/verified">
				Learn More			</a>
		</div>
	</div>
				<div class="block search_collapse_block" data-collapse-name="vrsupport" data-collapse-default="true">
				<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header"><div>Narrow by VR Support</div></div>
				<div class="block_content block_content_inner" id="narrow_byVR" style="height: 168px;">
				
	<div class="tab_filter_control_row " data-param="vrsupport" data-value="401" data-loc="VR Only" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="vrsupport" data-value="401" data-loc="VR Only" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						VR Only					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
					<span class="tab_filter_control_not " data-param="unvrsupport" data-value="401" data-icon="https://store.cloudflare.steamstatic.com/public/images/search_crouton_not.svg" data-loc="VR Only" data-clientside="0" data-tooltip-text="Exclude VR Only games" ><img src="https://store.cloudflare.steamstatic.com/public/images/search_checkbox_not.svg" width="16px" height="16px"></span>
			</div>
	
	<div class="tab_filter_control_row " data-param="vrsupport" data-value="402" data-loc="VR Supported" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="vrsupport" data-value="402" data-loc="VR Supported" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						VR Supported					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
		<input type="hidden" id="vrsupport" name="vrsupport" value="" data-antifield='unvrsupport' />	<input type="hidden" id="unvrsupport" name="unvrsupport" value="" data-antifield='vrsupport' />				</div>
				<a class="see_all_expander nocollapse_only" href="#" onclick="ExpandOptions(this, 'narrow_byVR'); return false;">See all</a>
			</div>
			<div class="block search_collapse_block" data-collapse-name="os">
				<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header"><div>Narrow by OS</div></div>
				<div class="block_content block_content_inner">
						<input type="hidden" id="os" name="os" value=""  />
	<div class="tab_filter_control_row " data-param="os" data-value="win" data-loc="Windows" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="os" data-value="win" data-loc="Windows" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Windows					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="os" data-value="mac" data-loc="macOS" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="os" data-value="mac" data-loc="macOS" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						macOS					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="os" data-value="linux" data-loc="SteamOS + Linux" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="os" data-value="linux" data-loc="SteamOS + Linux" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						SteamOS + Linux					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
					</div>
			</div>


        
	<div class="block search_collapse_block" data-collapse-name="language" data-collapse-default="true">
		<div data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="block_header">
			<div>Narrow by language</div>
		</div>
		<div id="narrow_language" class="block_content block_content_inner" >
			<div id="LanguageFilter_Container"  style="max-height: 300px; overflow: hidden;" >
					<input type="hidden" id="supportedlang" name="supportedlang" value="english"  />
	<div class="tab_filter_control_row checked" data-param="supportedlang" data-value="english" data-loc="English" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include checked" data-param="supportedlang" data-value="english" data-loc="English" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						English					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="schinese" data-loc="Simplified Chinese" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="schinese" data-loc="Simplified Chinese" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Simplified Chinese					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="tchinese" data-loc="Traditional Chinese" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="tchinese" data-loc="Traditional Chinese" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Traditional Chinese					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="japanese" data-loc="Japanese" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="japanese" data-loc="Japanese" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Japanese					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="koreana" data-loc="Korean" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="koreana" data-loc="Korean" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Korean					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="thai" data-loc="Thai" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="thai" data-loc="Thai" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Thai					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="bulgarian" data-loc="Bulgarian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="bulgarian" data-loc="Bulgarian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Bulgarian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="czech" data-loc="Czech" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="czech" data-loc="Czech" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Czech					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="danish" data-loc="Danish" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="danish" data-loc="Danish" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Danish					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="german" data-loc="German" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="german" data-loc="German" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						German					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="spanish" data-loc="Spanish - Spain" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="spanish" data-loc="Spanish - Spain" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Spanish - Spain					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="latam" data-loc="Spanish - Latin America" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="latam" data-loc="Spanish - Latin America" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Spanish - Latin America					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="greek" data-loc="Greek" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="greek" data-loc="Greek" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Greek					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="french" data-loc="French" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="french" data-loc="French" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						French					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="italian" data-loc="Italian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="italian" data-loc="Italian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Italian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="indonesian" data-loc="Indonesian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="indonesian" data-loc="Indonesian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Indonesian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="hungarian" data-loc="Hungarian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="hungarian" data-loc="Hungarian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hungarian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="dutch" data-loc="Dutch" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="dutch" data-loc="Dutch" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dutch					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="norwegian" data-loc="Norwegian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="norwegian" data-loc="Norwegian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Norwegian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="polish" data-loc="Polish" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="polish" data-loc="Polish" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Polish					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="portuguese" data-loc="Portuguese - Portugal" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="portuguese" data-loc="Portuguese - Portugal" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Portuguese - Portugal					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="brazilian" data-loc="Portuguese - Brazil" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="brazilian" data-loc="Portuguese - Brazil" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Portuguese - Brazil					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="romanian" data-loc="Romanian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="romanian" data-loc="Romanian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Romanian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="russian" data-loc="Russian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="russian" data-loc="Russian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Russian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="finnish" data-loc="Finnish" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="finnish" data-loc="Finnish" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Finnish					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="swedish" data-loc="Swedish" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="swedish" data-loc="Swedish" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Swedish					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="turkish" data-loc="Turkish" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="turkish" data-loc="Turkish" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Turkish					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="vietnamese" data-loc="Vietnamese" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="vietnamese" data-loc="Vietnamese" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Vietnamese					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="ukrainian" data-loc="Ukrainian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="ukrainian" data-loc="Ukrainian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Ukrainian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="arabic" data-loc="Arabic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="arabic" data-loc="Arabic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Arabic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="afrikaans" data-loc="Afrikaans" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="afrikaans" data-loc="Afrikaans" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Afrikaans					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="albanian" data-loc="Albanian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="albanian" data-loc="Albanian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Albanian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="amharic" data-loc="Amharic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="amharic" data-loc="Amharic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Amharic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="armenian" data-loc="Armenian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="armenian" data-loc="Armenian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Armenian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="assamese" data-loc="Assamese" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="assamese" data-loc="Assamese" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Assamese					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="azerbaijani" data-loc="Azerbaijani" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="azerbaijani" data-loc="Azerbaijani" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Azerbaijani					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="bangla" data-loc="Bangla" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="bangla" data-loc="Bangla" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Bangla					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="basque" data-loc="Basque" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="basque" data-loc="Basque" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Basque					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="belarusian" data-loc="Belarusian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="belarusian" data-loc="Belarusian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Belarusian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="bosnian" data-loc="Bosnian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="bosnian" data-loc="Bosnian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Bosnian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="catalan" data-loc="Catalan" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="catalan" data-loc="Catalan" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Catalan					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="cherokee" data-loc="Cherokee" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="cherokee" data-loc="Cherokee" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Cherokee					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="croatian" data-loc="Croatian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="croatian" data-loc="Croatian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Croatian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="dari" data-loc="Dari" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="dari" data-loc="Dari" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Dari					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="estonian" data-loc="Estonian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="estonian" data-loc="Estonian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Estonian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="filipino" data-loc="Filipino" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="filipino" data-loc="Filipino" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Filipino					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="galician" data-loc="Galician" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="galician" data-loc="Galician" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Galician					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="georgian" data-loc="Georgian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="georgian" data-loc="Georgian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Georgian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="gujarati" data-loc="Gujarati" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="gujarati" data-loc="Gujarati" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Gujarati					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="gurmukhi" data-loc="Punjabi (Gurmukhi)" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="gurmukhi" data-loc="Punjabi (Gurmukhi)" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Punjabi (Gurmukhi)					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="hausa" data-loc="Hausa" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="hausa" data-loc="Hausa" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hausa					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="hebrew" data-loc="Hebrew" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="hebrew" data-loc="Hebrew" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hebrew					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="hindi" data-loc="Hindi" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="hindi" data-loc="Hindi" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Hindi					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="icelandic" data-loc="Icelandic" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="icelandic" data-loc="Icelandic" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Icelandic					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="igbo" data-loc="Igbo" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="igbo" data-loc="Igbo" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Igbo					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="irish" data-loc="Irish" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="irish" data-loc="Irish" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Irish					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="kannada" data-loc="Kannada" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="kannada" data-loc="Kannada" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Kannada					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="kazakh" data-loc="Kazakh" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="kazakh" data-loc="Kazakh" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Kazakh					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="khmer" data-loc="Khmer" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="khmer" data-loc="Khmer" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Khmer					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="kiche" data-loc="K'iche'" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="kiche" data-loc="K'iche'" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						K'iche'					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="kinyarwanda" data-loc="Kinyarwanda" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="kinyarwanda" data-loc="Kinyarwanda" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Kinyarwanda					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="konkani" data-loc="Konkani" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="konkani" data-loc="Konkani" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Konkani					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="kyrgyz" data-loc="Kyrgyz" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="kyrgyz" data-loc="Kyrgyz" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Kyrgyz					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="latvian" data-loc="Latvian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="latvian" data-loc="Latvian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Latvian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="lithuanian" data-loc="Lithuanian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="lithuanian" data-loc="Lithuanian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Lithuanian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="luxembourgish" data-loc="Luxembourgish" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="luxembourgish" data-loc="Luxembourgish" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Luxembourgish					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="macedonian" data-loc="Macedonian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="macedonian" data-loc="Macedonian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Macedonian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="malay" data-loc="Malay" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="malay" data-loc="Malay" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Malay					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="malayalam" data-loc="Malayalam" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="malayalam" data-loc="Malayalam" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Malayalam					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="maltese" data-loc="Maltese" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="maltese" data-loc="Maltese" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Maltese					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="maori" data-loc="Maori" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="maori" data-loc="Maori" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Maori					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="marathi" data-loc="Marathi" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="marathi" data-loc="Marathi" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Marathi					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="mongolian" data-loc="Mongolian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="mongolian" data-loc="Mongolian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Mongolian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="nepali" data-loc="Nepali" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="nepali" data-loc="Nepali" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Nepali					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="odia" data-loc="Odia" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="odia" data-loc="Odia" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Odia					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="persian" data-loc="Persian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="persian" data-loc="Persian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Persian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="quechua" data-loc="Quechua" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="quechua" data-loc="Quechua" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Quechua					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="scots" data-loc="Scots" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="scots" data-loc="Scots" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Scots					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="serbian" data-loc="Serbian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="serbian" data-loc="Serbian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Serbian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="shahmukhi" data-loc="Punjabi (Shahmukhi)" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="shahmukhi" data-loc="Punjabi (Shahmukhi)" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Punjabi (Shahmukhi)					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="sindhi" data-loc="Sindhi" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="sindhi" data-loc="Sindhi" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sindhi					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="sinhala" data-loc="Sinhala" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="sinhala" data-loc="Sinhala" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sinhala					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="slovak" data-loc="Slovak" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="slovak" data-loc="Slovak" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Slovak					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="slovenian" data-loc="Slovenian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="slovenian" data-loc="Slovenian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Slovenian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="sorani" data-loc="Sorani" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="sorani" data-loc="Sorani" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sorani					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="sotho" data-loc="Sotho" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="sotho" data-loc="Sotho" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Sotho					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="swahili" data-loc="Swahili" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="swahili" data-loc="Swahili" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Swahili					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="tajik" data-loc="Tajik" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="tajik" data-loc="Tajik" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tajik					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="tamil" data-loc="Tamil" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="tamil" data-loc="Tamil" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tamil					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="tatar" data-loc="Tatar" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="tatar" data-loc="Tatar" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tatar					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="telugu" data-loc="Telugu" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="telugu" data-loc="Telugu" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Telugu					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="tigrinya" data-loc="Tigrinya" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="tigrinya" data-loc="Tigrinya" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tigrinya					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="tswana" data-loc="Tswana" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="tswana" data-loc="Tswana" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Tswana					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="turkmen" data-loc="Turkmen" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="turkmen" data-loc="Turkmen" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Turkmen					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="urdu" data-loc="Urdu" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="urdu" data-loc="Urdu" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Urdu					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="uyghur" data-loc="Uyghur" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="uyghur" data-loc="Uyghur" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Uyghur					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="uzbek" data-loc="Uzbek" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="uzbek" data-loc="Uzbek" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Uzbek					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="valencian" data-loc="Valencian" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="valencian" data-loc="Valencian" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Valencian					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="welsh" data-loc="Welsh" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="welsh" data-loc="Welsh" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Welsh					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="wolof" data-loc="Wolof" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="wolof" data-loc="Wolof" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Wolof					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="xhosa" data-loc="Xhosa" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="xhosa" data-loc="Xhosa" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Xhosa					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="yoruba" data-loc="Yoruba" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="yoruba" data-loc="Yoruba" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Yoruba					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
	
	<div class="tab_filter_control_row " data-param="supportedlang" data-value="zulu" data-loc="Zulu" data-clientside="0">
		<span data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" class="tab_filter_control tab_filter_control_include " data-param="supportedlang" data-value="zulu" data-loc="Zulu" data-clientside="0">
			<span>
					<span class="tab_filter_control_checkbox"></span>
					<span class="tab_filter_control_label"  >
						Zulu					</span>
					<span class="tab_filter_control_count" style="display: none;"></span>
			</span>
		</span>
			</div>
				</div>
			<input type="text" id="LanguageSuggest" class="search_filter_suggest">
			<script>
				$J( '#LanguageFilter_Container' ).tableFilter({ maxvisible: 15, control: '#LanguageSuggest', dataattribute: 'loc', 'defaultText': 'search for more languages' });
			</script>
			<div id="search_manage_lang_preferences_btn">
				<a href="https://store.steampowered.com/account/languagepreferences?snr=1_7_7_7000">
					Manage language preferences				</a>
			</div>
		</div>
		<a class="see_all_expander nocollapse_only" href="#" onclick="ExpandOptions(this, 'LanguageFilter_Container'); return false;">See all</a>
	</div>
	
		
		</div>
		<div class="clear_ctn" style="clear: both;"></div>
	</div>
</div>
<!-- End Main Background -->

<div id="hidden_searchform_elements">
	<!-- in responsive mode, the hidden right column inputs are reparented here so they are part of the form -->
	<input type="hidden" id="search_snr_value" name="snr" value="1_7_7_7000_7">
	<input type="hidden" name="list_of_subs" value="">

	<input type="hidden" name="specials" id="specials" value="">
	<input type="hidden" name="hidef2p" id="hidef2p" value="">
	<input type="hidden" name="filter" value="topsellers">
	<input type="hidden" name="genre" value="">
	<input type="hidden" name="salepage" value="">
	<input type="hidden" name="publisher" id="publisher" value="">
	<input type="hidden" name="developer" id="developer" value="">
	<input type="hidden" name="manufacturer" id="manufacturer" value="">
	<input type="hidden" name="franchise" id="franchise" value="">
	<input type="hidden" id="search_current_page" name="page" value="1">
	</div>

</form>

		</div>	<!-- responsive_page_legacy_content -->

		<div id="footer_spacer" style="" class=""></div>
<div id="footer"  class="">
<div class="footer_content">

    <div class="rule"></div>
				<div id="footer_logo_steam"><img src="https://store.cloudflare.steamstatic.com/public/images/v6/logo_steam_footer.png" alt="Valve Software" border="0" /></div>
	
    <div id="footer_logo"><a href="http://www.valvesoftware.com" target="_blank" rel=""><img src="https://store.cloudflare.steamstatic.com/public/images/footerLogo_valve_new.png" alt="Valve Software" border="0" /></a></div>
    <div id="footer_text" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}" >
        <div>&copy; 2023 Valve Corporation.  All rights reserved.  All trademarks are property of their respective owners in the US and other countries.</div>
        <div>VAT included in all prices where applicable.&nbsp;&nbsp;

            <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_" target="_blank" rel="">Privacy Policy</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/legal/?snr=1_44_44_" target="_blank" rel="">Legal</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_" target="_blank" rel="">Steam Subscriber Agreement</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_" target="_blank" rel="">Refunds</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_" target="_blank" rel="">Cookies</a>

        </div>
					<div class="responsive_optin_link">
				<div class="btn_medium btnv6_grey_black" onclick="Responsive_RequestMobileView()">
					<span>View mobile website</span>
				</div>
			</div>
		
    </div>



    <div style="clear: left;"></div>
	<br>

    <div class="rule"></div>

    <div class="valve_links" data-panel="{&quot;flow-children&quot;:&quot;row&quot;}" >
        <a href="http://www.valvesoftware.com/about" target="_blank" rel="">About Valve</a>
        &nbsp; | &nbsp;<a href="http://www.valvesoftware.com" target="_blank" rel="">Jobs</a>
        &nbsp; | &nbsp;<a href="http://www.steampowered.com/steamworks/" target="_blank" rel="">Steamworks</a>
        &nbsp; | &nbsp;<a href="https://partner.steamgames.com/steamdirect" target="_blank" rel="">Steam Distribution</a>
        &nbsp; | &nbsp;<a href="https://help.steampowered.com/en/?snr=1_44_44_">Support</a>
                        		&nbsp; | &nbsp;<a href="https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_" target="_blank" rel="">Gift Cards</a>
		&nbsp; | &nbsp;<a href="https://steamcommunity.com/linkfilter/?url=http://www.facebook.com/Steam" target="_blank" rel=" noopener"><img src="https://store.cloudflare.steamstatic.com/public/images/ico/ico_facebook.gif"> Steam</a>
		&nbsp; | &nbsp;<a href="http://twitter.com/steam" target="_blank" rel=""><img src="https://store.cloudflare.steamstatic.com/public/images/ico/ico_twitter.gif"> @steam</a>
            </div>

</div>
</div>
	</div>	<!-- responsive_page_content -->

</div>	<!-- responsive_page_frame -->
</body>
</html>`)

$("div#search_resultsRows a[data-ds-appid='1774580']")
    .each((index, element) => {
        let item = cheerio.load(element);
        let id = item("[data-ds-appid]").attr("data-ds-appid")
        let name = item(".title").text();
        let header_image = item("img").attr("src");
        const original = 1 - Number(item(".col.search_discount_and_price.responsive_secondrow").children().first().attr("data-discount")) / 100;
        let price = item(".col.search_price_discount_combined.responsive_secondrow").attr("data-price-final");

        let original_price = original ? (price / original) : price;
        original_price = original_price.toFixed(0)
        let obj = { _id: id, name, header_image, original_price, isBestSeller: true };
        console.log(obj)
    });