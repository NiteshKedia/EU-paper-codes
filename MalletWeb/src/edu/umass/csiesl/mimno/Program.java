package edu.umass.csiesl.mimno;


import java.io.*;
import java.util.*;
import java.util.regex.*;

import cc.mallet.pipe.*;
import cc.mallet.pipe.iterator.*;
import cc.mallet.types.*;

import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

public class Program {

	public static JSONObject theMain(JSONObject object) throws IOException
	{
		// In case 1: I am trying to import files to instances and pass it through pipe for preprocessing steps.
		// Data import suceed but topic modeling didn't work
		//case1();
		// In case 2: I mimic the example of topic modeling given by mallet developper guide.
		// it works fine with the ap.txt. I will try to mimic the way of generating a single file that follow 
		// the mallet format sitringID,class,content After generating that file I will try to feed it to an identical class for as case2
		//case2(); works perfectly with the test api example.
		//
		// case 3 works file
		//case3();
		JSONObject response = case4(object);
		return response;

	}

	public static void case2()
	{
		MalletExampleTopics me = new MalletExampleTopics();
		try {
			me.run();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void case3()
	{
		Case3 cs3 = new Case3();
		cs3.run();

	}
	static ArrayList<String> docsFileContentArrayList;
	static ArrayList<String> docsFileIdArrayList;
	
	public static JSONObject case4(JSONObject object) throws IOException
	{
		Case4 case4 = new Case4( object);
		JSONObject objJSONReturned = case4.run();
		System.out.print(objJSONReturned);
		return objJSONReturned;
		

	}
	

	
	public static void case1()
	{
		////////////////////////Import Data /////////////////////////////////////////////////////////////////
		// Directory Results
		String dirResults = "C:/mallet-2.0.7/mallet-2.0.7/Solvakia_results";

		//  full path of along with the directory of all text files where located
		String dirData = "C:/mallet-2.0.7/mallet-2.0.7/Solvakia/pospoltost_and_SNS";

		//String dirData = "C:/mallet-2.0.7/mallet-2.0.7/data/web/en";

		// The name of instances single file you want to name after importing
		String insFielName = dirResults+"/"+"ins.mallet";

		ImportTheTextFiles imp = new ImportTheTextFiles();
		InstanceList lst=null;

		try {
			// providing import data with text file location and the new signle file name to import in
			lst = imp.run(dirData, insFielName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		///////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////// Topic Detection /////////////////////////////////////////////////////

		Topics t = new Topics();
		try {
			t.topics(lst);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
