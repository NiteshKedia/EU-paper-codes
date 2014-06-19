package edu.umass.csiesl.servlet;

import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import edu.umass.csiesl.mimno.*;

/**
 * Servlet implementation class ServletMallet
 */
@WebServlet("/ServletMallet")
public class ServletMallet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletMallet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Servlet#getServletInfo()
	 */
	public String getServletInfo() {
		// TODO Auto-generated method stub
		return null; 
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		// TODO Auto-generated method stub
		
				// Set a cookie for the user, so that the counter does not increate
						// every time the user press refresh
						HttpSession session = request.getSession(true);
						// Set the session valid for 5 secs
						session.setMaxInactiveInterval(5);
						int counter=0;
						if (session.isNew()) {
							counter++;
							

						}
						Program g = new Program();
						
						String jsonValue = request.getParameter("jsonValue");

					    if (jsonValue != null && !jsonValue.isEmpty()) {
					        JSONObject object = (JSONObject) JSONValue.parse(jsonValue);
					        JSONObject jsonResponse= g.theMain(object);
					        //do whatever you need to do with JSON....
					        response.setCharacterEncoding("utf8");
							response.setContentType("application/json"); 
							 PrintWriter out = response.getWriter();
							    out.println(jsonResponse) ; 
							    out.close();

					    }
						
						request.setCharacterEncoding("utf8");
						
						

		
		
	}

}
