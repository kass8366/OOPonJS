// Первая задача

class Rectangle {
    constructor(width,height){
        this._width = width;
        this._height = height;
    }
    getArea() {
        return this._width*this._height;
    }
    getPerimeter() {
        return this._width*2 +this._height*2;
    }
    toString() {
        console.log(`Прямоугольник с шириной ${this._width} и высотой ${this._width} имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`)
    }
}

const rect = new Rectangle(100,30)


rect.toString()

// Вторая задача

/*
class Square extends Rectangle {
    constructor(width){
        super(width)
        this._height = width;
    }
    toString() {
        console.log(`Квадрат со сторонами ${this._width} имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`)
    }

}

*/


class Square extends Rectangle {
    constructor(side){
        super(side,side)
    }
    toString() {
        console.log(`Квадрат со сторонами ${this._width} имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`)
    }

}

const sq = new Square(30)


sq.toString()