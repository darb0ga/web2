package servlet;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import utils.Point;

import java.io.IOException;
import java.time.Duration;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/area-check-servlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        handleRequest(request, response);
    }

    protected void handleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();


        var x = Float.parseFloat(request.getParameter("x"));
        var y = Float.parseFloat(request.getParameter("y"));
        var r = Float.parseFloat(request.getParameter("r"));
        List<Point> results = new ArrayList<>();

        boolean isHit = checkPointInsideArea(x, y, r);
        Point dot = new Point(x, y, r);
        dot.setIn(isHit);

        results.add(dot);
        context.setAttribute("point", dot);
        context.setAttribute("results", results);

        request.getRequestDispatcher("/result.jsp").forward(request, response);
    }

    private boolean checkPointInsideArea(float x, float y, float r) {
        if (y < 0 && x > 0) {
            return false;
        }
        if (y >= 0 && x >= 0) {
            if ((y * y + x * x) > r * r) {
                return false;
            }
        }
        if (y > 0 && x < 0) {
            if (y > x + r / 2) {
                return false;
            }
        }
        if (x < 0 && y < 0) {
            return !(x > -r) && !(y < -r);
        }
        return true;
    }


}
