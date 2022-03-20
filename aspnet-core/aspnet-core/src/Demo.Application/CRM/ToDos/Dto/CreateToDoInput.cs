using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.CRM.ToDos.Dto
{
    [AutoMapTo(typeof(ToDo))]
    public class CreateToDoInput
    {
        [Required]
        [StringLength(ToDoConsts.MaxNameLength)]
        public string Name { get; set; }
        public bool IsStatus { get; set; }
        public long UserId { get; set; }
    }
}
