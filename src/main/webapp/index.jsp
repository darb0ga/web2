<%@ page import="java.util.List" %>
<%@ page import="java.time.temporal.ChronoUnit" %>
<%@ page import="java.time.temporal.Temporal" %>
<%@ page import="java.time.LocalTime" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="utils.Point" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html lang="ru">
<head>


    <meta http-equiv="Content-Type" content="text/html;
 charset=utf-8">
    <title>Пример веб-страницы</title>
    <link rel="stylesheet" href="style/main.css">
    <script defer type="text/javascript" src="canvas.js"></script>
    <script defer type="text/javascript" src="index.js"></script>
    <script defer type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
<header>
    Борисова Дарья. Группа: P3231. <br> Номер варианта: 655
</header>
<hr>
<table>
    <td>

        <p>Выберите значение</p>
        <form method="post" action="/web2/controller-servlet" id="table">
            <table id="check">
                <tr>
                    <td>
                        <label for="x">Введите X:</label>
                        <input name="x" id="x" type="text" placeholder="введите значения от -5 до 3"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Выберите Y:</label>
                        <div class="group">
                            <input name="y" id="-4" class="checkbox" type="checkbox"
                                   value="-4"/>
                            <label name="y" for="-4">-4</label>
                            <input name="y" id="-3" class="checkbox" type="checkbox"
                                   value="-3"/>
                            <label name="y" for="-3">-3</label>
                            <input name="y" id="-2" class="checkbox" type="checkbox"
                                   value="-2"/>
                            <label name="y" for="-2">-2</label>
                            <input name="y" id="-1" class="checkbox" type="checkbox"
                                   value="-1"/>
                            <label name="y" for="-1">-1</label>
                            <input name="y" id="0" class="checkbox" type="checkbox"
                                   value="0"/>
                            <label name="y" for="0">0</label>
                            <input name="y" id="1" class="checkbox" type="checkbox"
                                   value="1"/>
                            <label name="y" for="1">1</label>
                            <input name="y" id="2" class="checkbox" type="checkbox"
                                   value="2"/>
                            <label name="y" for="2">2</label>
                            <input name="y" id="3" class="checkbox" type="checkbox"
                                   value="3"/>
                            <label name="y" for="3">3</label>
                            <input name="y" id="4" class="checkbox" type="checkbox"
                                   value="4"/>
                            <label name="y" for="4">4</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Выберите R:</label>
                        <p>
                        <div class="group">
                            <input name="r" id="r1" class="checkbox" type="checkbox" onchange="drawGraph(1);"
                                   value="1"/>
                            <label name="r" for="r1">1</label>
                            <input name="r" id="r1.5" class="checkbox" type="checkbox" onchange="drawGraph(1.5);"
                                   value="1.5"/>
                            <label name="r"for="r1.5">1.5</label>
                            <input name="r" id="r2" class="checkbox" type="checkbox" onchange="drawGraph(2);"
                                   value="2"/>
                            <label name="r" for="r2">2</label>
                            <input name="r" id="r2.5" class="checkbox" type="checkbox" onchange="drawGraph(2.5);"
                                   value="2.5"/>
                            <label name="r" for="r2.5">2.5</label>
                            <input name="r" id="r3" class="checkbox" type="checkbox" onchange="drawGraph(3);"
                                   value="3"/>
                            <label name="r" for="r3">3</label>
                        </div>
                    </td>
                </tr>
            </table>
        </form>

        <button type="submit" id="button" onclick="onSubmit(this)" value="Отправить данные">Отправить данные</button>
    </td>
    <td id="Area">
        <canvas id="graph" width="500" height="500" onclick="canvas();"></canvas>
    </td>
    <td>
        <p>История:</p>
        <table id="res">
             <%--результаты не добавляются--%>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>execution time</th>
                <th>result</th>
            </tr>
            <tbody>
            <%  ServletContext context = getServletContext();

                // Извлекаем список из контекста приложения
                List<Point> results = (List<Point>) context.getAttribute("results");

                if (results != null) {
                    for(int index = results.size() - 1; index >= 0; index--){

            %>
            <tr>
                <td><%=results.get(index).getX()%>
                </td>
                <td><%=results.get(index).getY()%>
                </td>
                <td><%=results.get(index).getR()%>
                </td>
                <td><%=ChronoUnit.MICROS.between((Temporal) context.getAttribute("time"), LocalTime.now())%>
                </td>
                <td><%=results.get(index).getIn()%>
                </td>
            </tr>
            <%
                    }
                }
            %>
            </tbody>
        </table>
    </td>
</table>

</body>
</html>