<%@ page import="utils.Point" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>


<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html;
 charset=utf-8">
    <title>Пример веб-страницы</title>
    <link rel="stylesheet" href="style/main.css">
    <script defer type="text/javascript" src="canvas.js"></script>
    <script defer type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<header>Результаты</header>
<body>
<table>
    <tr>
        <td width="100%">
            <p><i>Результат:</i></p>
            <table id="res">
                <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>result</th>
                </tr>
                </thead>
                <tbody>
                <%  ServletContext context = getServletContext();

                    // Извлекаем список из контекста приложения
                    Point dot = (Point) context.getAttribute("point");


                    if (dot != null) {
                %>
                <tr>
                    <td><%=dot.getX()%>
                    </td>
                    <td><%=dot.getY()%>
                    </td>
                    <td><%=dot.getR()%>
                    </td>
                    <td><%=dot.getIn()%>
                    </td>
                </tr>
                <%
                }
                %>
                </tbody>
                <button id="back-button" type="button"
                        onclick="window.location.href='${pageContext.request.contextPath}/'">Back
                </button>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
