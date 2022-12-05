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

		document.getElementById('code-display').innerHTML = 
		'&lt;span style=&quot;color: #6c7680;&quot;&gt;&lt;a name=&quot;' + anchorName + '&quot;&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;h2 style=&quot;text-align: center; margin-bottom: 20px;&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+ + sectionHeader + '&lt;/span&gt;&lt;/h2&gt; <br/>'+
		'&lt;div class=&quot;download-column-container&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-column&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;English&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + enLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/gb.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/ie.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0006_Flag_of_South_Africa_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0024_Flag_of_India_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Deutsch&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + deLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/de.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/at.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0019_Flag_of_Liechtenstein_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Fran&ccedil;ais&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + frLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/fr.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0018_Flag_of_Luxembourg_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0017_Flag_of_Morocco_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Italiano&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + itLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0022_Flag_of_Italy_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Espa&ntilde;ol&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + spLang +' &quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/es.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Polski&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + poLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0014_Flag_of_Poland_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Column --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-column&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Русский&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + ruLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0011_Flag_of_Russia_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0033_Flag_of_Belarus_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0021_Flag_of_Kazakhstan_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0034_Flag_of_Azerbaijan_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0035_Flag_of_Armenia_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;style=&quot;text-align: right;&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;العربية&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + arLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0002_Flag_of_the_United_Arab_Emirates_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0010_Flag_of_Saudi_Arabia_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0029_Flag_of_Egypt_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0020_Flag_of_Kuwait_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0015_Flag_of_Oman_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0013_Flag_of_Qatar_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Български&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + buLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0032_Flag_of_Bulgaria_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Hrvatski&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + crLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0031_Flag_of_Croatia_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Če&scaron;tina&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + czLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0005_Flag_of_the_Czech_Republic_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Dansk&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + daLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/dk.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0004_Flag_of_the_Faroe_Islands_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Column --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-column&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Nederlands&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + duLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/nl.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;suomi&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + fnLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0028_Flag_of_Finland_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot; style=&quot;text-align: right;&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;עברית&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + hbLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0023_Flag_of_Israel_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Magyar&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + hgLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0026_Flag_of_Hungary_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Norsk&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + nwLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0016_Flag_of_Norway_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0025_Flag_of_Iceland_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Portugu&ecirc;s&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + ptLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/pt.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Column --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-column&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Rom&acirc;nă&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + rmLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0012_Flag_of_Romania_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Српски&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + sbLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0009_Flag_of_Serbia_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Slovenčina&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + skLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0008_Flag_of_Slovakia_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Sloven&scaron;čina&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + slLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0007_Flag_of_Slovenia_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Svenska&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + swLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/se.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;T&uuml;rk&ccedil;e&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + tkLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0001_Flag_of_Turkey_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0003_Flag_of_the_Turkish_Republic_of_Northern_Cyprus_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Column --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-column&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;Українська&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + ukLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0000_Flag_of_Ukraine_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- New Cell --&gt; <br/>'+
		'&lt;/span&gt; <br/>'+
		'&lt;div class=&quot;download-cell&quot;&gt; <br/>'+
		'&lt;div class=&quot;download-text&quot;&gt; <br/>'+
		'&lt;h4 class=&quot;download-header&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt;&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;ά&lt;/span&gt;&lt;/h4&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;' + gkLang + '&quot; target=&quot;_blank&quot;&gt; &lt;span id=&quot;mobile-download-text&quot;&gt;Download&lt;/span&gt;&lt;img alt=&quot;&quot; class=&quot;download-icon&quot; src=&quot;https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx&quot; /&gt;&lt;/a&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;div class=&quot;download-flags-container&quot;&gt;&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0027_Flag_of_Greece_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;img alt=&quot;&quot; class=&quot;download-flag&quot; src=&quot;https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0030_Flag_of_Cyprus_16x16.ashx&quot; /&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;/div&gt; <br/>'+
		'&lt;span style=&quot;color: #6c7680;&quot;&gt; <br/>'+
		'&lt;!-- END COLUMNS --&gt; <br/>'+
		'&lt;/span&gt;&lt;/div&gt; <br/>'
		;

		const htmlCode = 
		'<span style="color: #6c7680;"><a name="' + anchorName + '"></a>'+
		'</span>'+
		'<h2 style="text-align: center; margin-bottom: 20px;"><span style="color: #6c7680;">'+ + sectionTitle + '</span></h2>'+
		'<div class="download-column-container">'+
		'<div class="download-column"><span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">English</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + enLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/gb.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ie.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0006_Flag_of_South_Africa_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0024_Flag_of_India_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Deutsch</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + deLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/de.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/at.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0019_Flag_of_Liechtenstein_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Fran&ccedil;ais</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + frLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/fr.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0018_Flag_of_Luxembourg_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0017_Flag_of_Morocco_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Italiano</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + itLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0022_Flag_of_Italy_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/ch.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Espa&ntilde;ol</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + spLang +' " target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/es.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Polski</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + poLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0014_Flag_of_Poland_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Column -->'+
		'</span>'+
		'<div class="download-column"><span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Русский</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + ruLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0011_Flag_of_Russia_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0033_Flag_of_Belarus_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0021_Flag_of_Kazakhstan_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0034_Flag_of_Azerbaijan_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0035_Flag_of_Armenia_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"style="text-align: right;"><span style="color: #6c7680;">العربية</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + arLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0002_Flag_of_the_United_Arab_Emirates_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0010_Flag_of_Saudi_Arabia_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0029_Flag_of_Egypt_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0020_Flag_of_Kuwait_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0015_Flag_of_Oman_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0013_Flag_of_Qatar_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Български</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + buLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0032_Flag_of_Bulgaria_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Hrvatski</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + crLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0031_Flag_of_Croatia_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Če&scaron;tina</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + czLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0005_Flag_of_the_Czech_Republic_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Dansk</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + daLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/dk.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0004_Flag_of_the_Faroe_Islands_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Column -->'+
		'</span>'+
		'<div class="download-column"><span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Nederlands</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + duLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/nl.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/be.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">suomi</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + fnLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0028_Flag_of_Finland_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header" style="text-align: right;"><span style="color: #6c7680;">עברית</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + hbLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0023_Flag_of_Israel_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Magyar</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + hgLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0026_Flag_of_Hungary_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Norsk</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + nwLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0016_Flag_of_Norway_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0025_Flag_of_Iceland_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Portugu&ecirc;s</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + ptLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/pt.ashx" />'+
		'</span></div>'+
		'</div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Column -->'+
		'</span>'+
		'<div class="download-column"><span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Rom&acirc;nă</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + rmLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0012_Flag_of_Romania_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Српски</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + sbLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0009_Flag_of_Serbia_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Slovenčina</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + skLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0008_Flag_of_Slovakia_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Sloven&scaron;čina</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + slLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0007_Flag_of_Slovenia_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Svenska</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + swLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/se.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">T&uuml;rk&ccedil;e</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + tkLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0001_Flag_of_Turkey_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0003_Flag_of_the_Turkish_Republic_of_Northern_Cyprus_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Column -->'+
		'</span>'+
		'<div class="download-column"><span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">Українська</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + ukLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0000_Flag_of_Ukraine_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- New Cell -->'+
		'</span>'+
		'<div class="download-cell">'+
		'<div class="download-text">'+
		'<h4 class="download-header"><span style="color: #6c7680;">&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;ά</span></h4>'+
		'<span style="color: #6c7680;">'+
		'<a rel="noopener noreferrer" href="' + gkLang + '" target="_blank"> <span id="mobile-download-text">Download</span><img alt="" class="download-icon" src="https://about.irobot.com/-/media/Images/Icon-Callouts/download-icon.ashx" /></a>'+
		'</span></div>'+
		'<div class="download-flags-container"><span style="color: #6c7680;">'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0027_Flag_of_Greece_16x16.ashx" />'+
		'<img alt="" class="download-flag" src="https://about.irobot.com/-/media/Images/Flags/Europe/Owners_Guide_Flags_Square_16x16/_0030_Flag_of_Cyprus_16x16.ashx" />'+
		'</span></div>'+
		'</div>'+
		'</div>'+
		'<span style="color: #6c7680;">'+
		'<!-- END COLUMNS -->'+
		'</span></div>'
		;

		
		console.log(htmlCode);
		

		e.preventDefault(formReturn)

	}

	 function copyText(){
        document.getElementById('tooltip-copy').style.display = "inline-block"
        }

      
