package utils;

import java.io.Serializable;
import java.time.LocalTime;

public class Point implements Serializable{
    private float x;
    private float y;
    private float r;

    private boolean isIn;
    private LocalTime time;

    public Point(float x, float y, float r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.time = LocalTime.now();
    }

    public float getX(){
        return this.x;
    }

    public float getY(){
        return this.y;
    }

    public float getR(){
        return this.r;
    }
    public boolean getIn(){
        return this.isIn;
    }

    public boolean isIn(){
        return this.isIn;
    }

    public void setIn(boolean in) {
        isIn = in;
    }

    public LocalTime getTime(){
        return this.time;
    }
}
