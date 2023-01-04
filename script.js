  //US VERSION
  // 
	function get_values(e){
		document.querySelector("form").addEventListener("owners-guide-form", get_values );
		var formReturn = document.getElementById('owners-guide-form').value;

		const anchorName  = document.getElementById("sectionAnchor").value;
		const sectionTitle  = document.getElementById("sectionHeader").value;
		const enLang  = document.getElementById("en-lang").value;
		const deLang  = document.getElementById("de-lang").value;
		const frLang  = document.getElementById("fr-lang").value;
		const itLang  = document.getElementById("it-lang").value;
		const spLang  = document.getElementById("sp-lang").value;
		const poLang  = document.getElementById("po-lang").value;
		const ruLang  = document.getElementById("ru-lang").value;
		const arLang  = document.getElementById("ar-lang").value;
		const buLang  = document.getElementById("bu-lang").value;
		const crLang  = document.getElementById("cr-lang").value;
		const czLang  = document.getElementById("cz-lang").value;
		const daLang  = document.getElementById("da-lang").value;
		const duLang  = document.getElementById("du-lang").value;
		const fnLang  = document.getElementById("fn-lang").value;
		const hbLang  = document.getElementById("hb-lang").value;
		const hgLang  = document.getElementById("hg-lang").value;
		const nwLang  = document.getElementById("nw-lang").value;
		const ptLang  = document.getElementById("pt-lang").value;
		const rmLang  = document.getElementById("rm-lang").value;
		const sbLang  = document.getElementById("sb-lang").value;
		const skLang  = document.getElementById("sk-lang").value;
		const slLang  = document.getElementById("sl-lang").value;
		const swLang  = document.getElementById("sw-lang").value;
		const tkLang  = document.getElementById("tk-lang").value;
		const ukLang  = document.getElementById("uk-lang").value;
		const gkLang  = document.getElementById("gk-lang").value;

		document.getElementById("final-textbox").value = "";


        document.getElementById('final-textbox').value +=
        '<span style="color: #6c7680;"><a name="' + anchorName + '"></a></span>' + '\r\n' +
        '<h2 style="text-align: center; margin-bottom: 20px;"><span style="color: #6c7680;">' + sectionTitle + '</span></h2>' + '\r\n' + 
        '<div class="download-column-container">' + '\r\n' + 
        '<div class="download-column"><span style="color: #6c7680;"></span>' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' +
        '<div class="download-cell">' + '\r\n' +
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">English</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/gb.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ie.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0006_Flag_of_South_Africa_16x16.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0024_Flag_of_India_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<span style="color: #6c7680;">' + '\r\n' +
        '<a href="' + enLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a></span>' + '\r\n' +
        '</div>' + '\r\n' +
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/gb.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ie.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0006_Flag_of_South_Africa_16x16.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0024_Flag_of_India_16x16.ashx" />' + '\r\n' +
        '</span></div>' + '\r\n' +
        '</div>' + '\r\n' + 
         '<!-- New Cell -->' + '\r\n' +
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Deutsch</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/de.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/at.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0019_Flag_of_Liechtenstein_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' +
        '<a href="' + deLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' +
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/de.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/at.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0019_Flag_of_Liechtenstein_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' +
        '<div class="download-cell">' + '\r\n' +
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Français</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/fr.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0018_Flag_of_Luxembourg_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0017_Flag_of_Morocco_16x16.ashx" />' + '\r\n' +
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + frLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/fr.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0018_Flag_of_Luxembourg_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0017_Flag_of_Morocco_16x16.ashx" />' + '\r\n' +
        '</span></div>' + '\r\n' +
        '</div>' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' +
        '<div class="download-text">' + '\r\n' +
        '<h4 class="download-header"><span style="color: #6c7680;">Italiano</span></h4>' + '\r\n' + 
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0022_Flag_of_Italy_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + itLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0022_Flag_of_Italy_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />' + '\r\n' +
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' +
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Español</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/es.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + spLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/es.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' +
        '<div class="download-text">' + '\r\n' +
        '<h4 class="download-header"><span style="color: #6c7680;">Polski</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0014_Flag_of_Poland_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + poLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0014_Flag_of_Poland_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '</div>' + '\r\n' + 
        '</div>' + '\r\n' + 
         '<!-- New Column -->' + '\r\n' +
        '<div class="download-column">' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' +
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Русский</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0011_Flag_of_Russia_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0033_Flag_of_Belarus_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0021_Flag_of_Kazakhstan_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0034_Flag_of_Azerbaijan_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0035_Flag_of_Armenia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + ruLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0011_Flag_of_Russia_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0033_Flag_of_Belarus_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0021_Flag_of_Kazakhstan_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0034_Flag_of_Azerbaijan_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0035_Flag_of_Armenia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '</div>' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"style="text-align: right;"><span style="color: #6c7680;">العربية</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0002_Flag_of_the_United_Arab_Emirates_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0010_Flag_of_Saudi_Arabia_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0029_Flag_of_Egypt_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0020_Flag_of_Kuwait_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0015_Flag_of_Oman_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0013_Flag_of_Qatar_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' +
        '<a href="' + arLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' +
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0002_Flag_of_the_United_Arab_Emirates_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0010_Flag_of_Saudi_Arabia_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0029_Flag_of_Egypt_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0020_Flag_of_Kuwait_16x16.ashx" />' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0015_Flag_of_Oman_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0013_Flag_of_Qatar_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' +
        '<h4 class="download-header"><span style="color: #6c7680;">Български</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0032_Flag_of_Bulgaria_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + buLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' +
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0032_Flag_of_Bulgaria_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Hrvatski</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0031_Flag_of_Croatia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + crLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0031_Flag_of_Croatia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Čeština</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0005_Flag_of_the_Czech_Republic_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<span style="color: #6c7680;">' + '\r\n' +
        '<a href="' + czLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0005_Flag_of_the_Czech_Republic_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' +  
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Dansk</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/dk.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0004_Flag_of_the_Faroe_Islands_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + daLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/dk.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0004_Flag_of_the_Faroe_Islands_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Column -->' + '\r\n' + 
        '<div class="download-column">' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' +
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Nederlands</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/nl.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +  
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + duLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/nl.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' +
        '</div>' + '\r\n' + 
         '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">suomi</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0028_Flag_of_Finland_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + fnLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0028_Flag_of_Finland_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header" style="text-align: right;"><span style="color: #6c7680;">עברית</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0023_Flag_of_Israel_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + hbLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0023_Flag_of_Israel_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Magyar</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0026_Flag_of_Hungary_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + hgLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0026_Flag_of_Hungary_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Norsk</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0016_Flag_of_Norway_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0025_Flag_of_Iceland_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' +
        '<a href="' + nwLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0016_Flag_of_Norway_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0025_Flag_of_Iceland_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Português</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/pt.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + ptLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/pt.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Column -->' + '\r\n' + 
        '<div class="download-column">' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Română</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0012_Flag_of_Romania_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + rmLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0012_Flag_of_Romania_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Српски</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' +
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0009_Flag_of_Serbia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + sbLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0009_Flag_of_Serbia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Slovenčina</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0008_Flag_of_Slovakia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + skLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0008_Flag_of_Slovakia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Slovenščina</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0007_Flag_of_Slovenia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + slLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0007_Flag_of_Slovenia_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Svenska</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/se.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + swLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/se.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' +
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Türkçe</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0001_Flag_of_Turkey_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0003_Flag_of_the_Turkish_Republic_of_Northern_Cyprus_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + tkLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0001_Flag_of_Turkey_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0003_Flag_of_the_Turkish_Republic_of_Northern_Cyprus_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' +  
        '</div>' + '\r\n' + 
        '<!-- New Column -->' + '\r\n' + 
        '<div class="download-column">' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Українська</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0000_Flag_of_Ukraine_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' + 
        '<a href="' + ukLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0000_Flag_of_Ukraine_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- New Cell -->' + '\r\n' + 
        '<div class="download-cell">' + '\r\n' + 
        '<div class="download-text">' + '\r\n' + 
        '<h4 class="download-header"><span style="color: #6c7680;">Ελληνικά</span></h4>' + '\r\n' +
        '<div class="mobile-download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0027_Flag_of_Greece_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0030_Flag_of_Cyprus_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<span style="color: #6c7680;">' + '\r\n' +
        '<a href="' + gkLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '<div class="download-flags-container"><span style="color: #6c7680;">' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0027_Flag_of_Greece_16x16.ashx" />' + '\r\n' + 
        '<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0030_Flag_of_Cyprus_16x16.ashx" />' + '\r\n' + 
        '</span></div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '</div>' + '\r\n' + 
        '<!-- END COLUMNS -->' + '\r\n' + 
        '</div>' + '\r\n' +
        '</div>' ;


		

		e.preventDefault(formReturn)

	}

	 function copyText(){
        document.getElementById('tooltip-copy').style.display = "inline-block"
        }

