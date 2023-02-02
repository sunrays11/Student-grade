export default interface Student {
    studentid: number;
    name: string;
    classid: number;
    maths: number;
    science: number;
    lang: number;
    average: number;
    grades:number;
}


export const Student: Student[]= [
    {
      "studentid": 111,
      "name": "Andrew",
      "classid": 10,
      "maths": 60,
      "science": 70,
      "lang": 60,
      "average": 63.33,
      "grades": 3.5
    },
    {
      "studentid": 112,
      "name": "Akshaya",
      "classid": 10,
      "maths": 50,
      "science": 71,
      "lang": 50,
      "average": 56.66,
      "grades": 3
    },
    {
      "studentid": 113,
      "name": "Balaji",
      "classid": 11,
      "maths": 90,
      "science": 71,
      "lang": 60,
      "average": 73.33,
      "grades": 4
    },
    {
      "studentid": 114,
      "name": "Bintu",
      "classid": 10,
      "maths": 90,
      "science": 90,
      "lang": 90,
      "average": 90.33,
      "grades": 5
    },
    {
      "studentid": 115,
      "name": "Cindrella",
      "classid": 11,
      "maths": 80,
      "science": 80,
      "lang": 80,
      "average": 80,
      "grades": 4.5
    },
    {
      "studentid": 116,
      "name": "David",
      "classid": 10,
      "maths": 60,
      "science": 71,
      "lang": 60,
      "average": 63.33,
      "grades": 3
    }
  ]