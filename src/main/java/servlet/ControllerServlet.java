package servlet;

import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import utils.Point;

import java.io.IOException;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/controller-servlet")
public class ControllerServlet extends HttpServlet {
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        handleRequest(request, response);
    }

    protected void handleRequest(HttpServletRequest request, HttpServletResponse response) {
        ServletContext context = getServletContext();
        LocalTime start = LocalTime.now();

        var x = request.getParameter("x");
        var y = request.getParameter("y");
        var r = request.getParameter("r");
        context.setAttribute("time", start);

        try {
            if (x != null && y != null && r != null) {
                request.getRequestDispatcher("/area-check-servlet").forward(request, response);
            } else {
                request.getRequestDispatcher("/index.jsp").forward(request, response);
            }

        } catch (IOException | ServletException e) {
            //e.getMessage();
            e.printStackTrace();
        }
    }
}

