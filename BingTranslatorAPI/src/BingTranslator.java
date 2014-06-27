
import com.memetix.mst.language.Language;
import com.memetix.mst.translate.Translate;
public class BingTranslator {

	/**
	 * @param args
	 * @throws Exception 
	 */
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
	//String clientId = "TestApplication123";
	//String clientSecret = "E+4kHAv7EyqfbGtMma5srpzFznoiKfOl8R6Dn84+hlE=";
	//Bing account:
	//EUPAPERASU@Outlook.com:
	//pass:	Eupassword@

		
    String clientId = "EUPAPERTRANSLATION";
	String clientSecret = "FLyjcdNvwW7Tb46Ep0VzE4IFMhChqIoq8cLdSoEJ4IQ=";
			
		
	Translate.setClientId(clientId);
	Translate.setClientSecret(clientSecret);
	
	String slovakString = " Aktuálne:Stanoviská UK, Oslavy 95. výročia UK, Zmena vstupu do historickej budovy"+
"O univerzite:Kontakt, Orgány univerzity, Súčasti univerzity, Rektorát, Legislatíva, Univerzitný časopis, ..."+
"Štúdium::";
	String txt = Translate.execute(slovakString, Language.SLOVAK, Language.ENGLISH);
	
    System.out.print(txt);
		
		
		

	}

}
