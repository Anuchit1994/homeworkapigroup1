using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using myDemoapi.Models;

namespace myDemoapi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ClassroomController : ControllerBase
    {
        public static List<Student> Students = new List<Student>
    {
        new Student{
            Id =Guid.NewGuid().ToString(),
            NameProduct = "บุหรี่ไฟฟ้า",
            PriceProduct = 2300,
            ProfileImage = "https://www.expertecig.com/images/stories/virtuemart/product/720c0913-a31f-afc0-d8c5-5b041d5fa80d.jpg"
        },

        new Student{
            Id =Guid.NewGuid().ToString(),
            NameProduct = "บุหรี่ผู้พัน(แมวดำ)",
            PriceProduct = 10,
            ProfileImage = "https://f.ptcdn.info/129/020/000/1402812977-F95903221-o.jpg"
        },
        new Student{
            Id =Guid.NewGuid().ToString(),
            NameProduct = "บุหรี่ผู้กอง(กรองทิพย์)",
            PriceProduct = 90,
            ProfileImage = "http://sabuyjaishop.com/shop/ecigthai/images/4nkeziuvj1arvh2jtg1r171020135519000028.jpg"
        },

    };
    [HttpGet]
    public List<Student> GetallStudents()
    {
        return Students;
    }

    [HttpGet("{id}")]
    public Student GetStudent(string id)
    {
        return Students.Find(it => it.Id == id);
    }

    [HttpPost]
    public void CreateStudent([FromBody]Student newStudent)
    {
        newStudent.Id = Guid.NewGuid().ToString();
        Students.Add(newStudent);
    }

    [HttpPut]

    public void UpdateStudent([FromBody]Student newStudent)
    {
        var oldStudent = Students.Find(it => it.Id == newStudent.Id);
        Students.Remove(oldStudent);
        Students.Add(newStudent);
    }

    [HttpDelete("{id}")]

    public void DeleteStudent(string id)
    {
      var student = Students.Find(it => it.Id ==id);
      Students.Remove(student);
    }


    }

}
