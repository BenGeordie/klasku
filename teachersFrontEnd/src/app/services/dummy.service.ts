import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }
  public static teacher = {
    name: "Hubert Leo",
    picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524042/hubert_sega6x.jpg",
    school: "Sekolah Contoh",
    recentChats: [
      {
        name: "Hugo Leo",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
        parentNumber: "081122334455"
      }, {
        name: "Hubert Leo",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
        parentNumber: "081122334455"
      }, {
        name: "Shaun Leo",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
        parentNumber: "081122334455"
      }, {
        name: "Sean Rivera",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
        parentNumber: "081122334455"
      }, {
        name: "Holly Bloggs",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
        parentNumber: "081122334455"
      }, {
        name: "Maya Millar",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
        parentNumber: "081122334455"
      }, {
        name: "Benito Geordie",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597412405/geordie_aiif5u.png",
        parentNumber: "081122334455"
      }, {
        name: "Sean La Teep",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597412405/geordie_aiif5u.png",
        parentNumber: "081125645455"
      }, {
        name: "Shaun Nic",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
        parentNumber: "081122339999"
      }
    ],
    classes: [
      {
        name: "Physics 1A",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524146/50119407_10210302972009177_6987656484851023872_o.jpg_waemrd.jpg",
        students: [
          {
            name: "Benito Geordie",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597412405/geordie_aiif5u.png",
            parentNumber: "081122334455"
          }, {
            name: "Sean La Teep",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597412405/geordie_aiif5u.png",
            parentNumber: "081125645455"
          }, {
            name: "Shaun Nic",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122339999"
          }
        ]
      }, {
        name: "English 1A",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524557/61770818_2059837934320687_3535442710984916992_o.jpg_uetk6u.jpg",
        students: [
          {
            name: "Hugo Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Hubert Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Shaun Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122334455"
          }
        ]
      }, {
        name: "Art 7B",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524557/61770818_2059837934320687_3535442710984916992_o.jpg_uetk6u.jpg",
        students: [
          {
            name: "Sean Rivera",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Holly Bloggs",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Maya Millar",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122334455"
          }
        ]
      } 
    ]
  };

  public static school = {
    name: "Sekolah Tiada Harapan",
    principal: "Shaun Latip",
    teachers: [
      {
        name: "Hubert Leo",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524042/hubert_sega6x.jpg",
        classes: ["Physics 1A", "Math 3A"]
      }, {
        name: "Patrik Ingram",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524179/74216705_100214328105692_7844535046319898624_n.jpg_hfo3no.jpg",
        classes: ["Math 3A", "English 1A"]
      }, {
        name: "Jonah Castillo",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524645/61535614_2059838117654002_595346634037002240_o.jpg_g9a0js.jpg",
        classes: ["Art 4B", "Matematika 1A"]
      }, {
        name: "Emma Sun",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524614/61946811_2059838060987341_6882871330211889152_o.jpg_uhmv1h.jpg",
        classes: ["Physics 1A", "Matematika 1A"]
      }, {
        name: "Dominika Herman",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524926/40654902_1956077984449617_8089952471205543936_n.jpg_jgkdwb.jpg",
        classes: ["Physics 1A", "Geography 4B"]
      }, {
        name: "Calum Schaefer",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
        classes: ["Physics 1A", "Matematika 1A"]
      }, {
        name: "Geordie Leo",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524158/39298819_1893204937641398_7174608525685948416_n.jpg_jsduow.jpg",
        classes: ["Physics 6A", "Matematika 3A"]
      }, {
        name: "Mali Hull",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524146/50119407_10210302972009177_6987656484851023872_o.jpg_waemrd.jpg",
        classes: ["Art 7B", "Matematika 1A"]
      }, {
        name: "Sienna Lu",
        picture: "https://cdn-cms.f-static.net/uploads/2169602/2000_crop_5cd4cc2f96e35_5cd4cbe12c6bc.jpg",
        classes: ["Physics 1A", "Matematika 1A"]
      }, 
    ],
    classes: [
      {
        name: "Physics 1A",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524146/50119407_10210302972009177_6987656484851023872_o.jpg_waemrd.jpg",
        students: [
          {
            name: "Benito Geordie",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597412405/geordie_aiif5u.png",
            parentNumber: "081122334455"
          }, {
            name: "Sean La Teep",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597412405/geordie_aiif5u.png",
            parentNumber: "081125645455"
          }, {
            name: "Shaun Nic",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122339999"
          }
        ]
      }, {
        name: "English 1A",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524557/61770818_2059837934320687_3535442710984916992_o.jpg_uetk6u.jpg",
        students: [
          {
            name: "Hugo Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Hubert Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Shaun Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122334455"
          }
        ]
      }, {
        name: "Math 3A",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524557/61770818_2059837934320687_3535442710984916992_o.jpg_uetk6u.jpg",
        students: [
          {
            name: "Asad Finnegan",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Hubert Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Kelsie Clay",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122334455"
          }
        ]
      }, {
        name: "Geography 4B",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524557/61770818_2059837934320687_3535442710984916992_o.jpg_uetk6u.jpg",
        students: [
          {
            name: "Kavita Moses",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
            parentNumber: "081122334455"
          }, {
            name: "June Key",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Shaun Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122334455"
          }
        ]
      }, {
        name: "Art 7A",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524557/61770818_2059837934320687_3535442710984916992_o.jpg_uetk6u.jpg",
        students: [
          {
            name: "Trinity Mclaughlin",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Madeline Andrade",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Shaun Leo",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122334455"
          }
        ]
      }, {
        name: "Art 7B",
        picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524557/61770818_2059837934320687_3535442710984916992_o.jpg_uetk6u.jpg",
        students: [
          {
            name: "Sean Rivera",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524822/69231127_10219827839345863_4599355446493446144_n.jpg_ijleuz.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Holly Bloggs",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524879/40603002_1955937104463705_2971425423830810624_n.jpg_r2wnqc.jpg",
            parentNumber: "081122334455"
          }, {
            name: "Maya Millar",
            picture: "https://res.cloudinary.com/dejr26gaj/image/upload/v1597524135/69384415_10156302072871875_4073767104342392832_o.jpg_cp4u6k.jpg",
            parentNumber: "081122334455"
          }
        ]
      } 
    ]
  };
}
