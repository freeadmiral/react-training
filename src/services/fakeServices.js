
const movies =[
    {
        _id:"213424",
        title:"Terminator",
        stock:"1",
        genre:{id:"3", name:"Thriller"},
        rate:2,
    },
    {
        _id:"23432432",
        title:"Die Hard",
        stock:"5",
        genre:{id:"3", name:"Thriller"},
        rate:7.8,
    },
    {
        _id:"ass4234324fdsf",
        title:"Avengers",
        stock:"9",
        genre:{id:"1", name:"Action"},
        rate:6,
    },
    {
        _id:"32432434",
        title:"Nonstop",
        stock:"5",
        genre:{id:"1", name:"Action"},
        rate:9,
    },
    {
        _id:"ass235345fdsf",
        title:"Future",
        stock:"5",
        genre:{id:"1", name:"Action"},
        rate:3,
    },
    {
        _id:"25345436",
        title:"Commonently",
        stock:"5",
        genre:{id:"1", name:"Action"},
        rate:5.5,
    },
    {
        _id:"12436575",
        title:"WTF WTF",
        stock:"5",
        genre:{id:"2", name:"Comedy"},
        rate:1,
    },
    {
        _id:"324654534",
        title:"Like Love",
        stock:"5",
        genre:{id:"2", name:"Comedy"},
        rate:9.8,
    },
    {
        _id:"23563454654",
        title:"Old Genders",
        stock:"5",
        genre:{id:"2", name:"Comedy"},
        rate:4.4,
    }
];

export function getMovies(){
    return movies;
}

export function getbyIdMovies(id){
    return movies.find(m=>m._id===id);
}
