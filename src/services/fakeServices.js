import * as genreAPI from "./fakeGenreServices";

const movies =[
    {
        _id:"213424",
        title:"Terminator",
        stock:"5",
        genre:{id:"3", name:"Thriller"},
        rate:2.5,
    },
    {
        _id:"23432432",
        title:"Die Hard",
        stock:"5",
        genre:{id:"3", name:"Thriller"},
        rate:2.5,
    },
    {
        _id:"ass4234324fdsf",
        title:"Avengers",
        stock:"5",
        genre:{id:"1", name:"Action"},
        rate:2.5,
    },
    {
        _id:"32432434",
        title:"Nonstop",
        stock:"5",
        genre:{id:"1", name:"Action"},
        rate:2.5,
    },
    {
        _id:"ass235345fdsf",
        title:"Future",
        stock:"5",
        genre:{id:"1", name:"Action"},
        rate:2.5,
    },
    {
        _id:"25345436",
        title:"Commonently",
        stock:"5",
        genre:{id:"1", name:"Action"},
        rate:2.5,
    },
    {
        _id:"12436575",
        title:"WTF WTF",
        stock:"5",
        genre:{id:"2", name:"Comedy"},
        rate:2.5,
    },
    {
        _id:"324654534",
        title:"Like Love",
        stock:"5",
        genre:{id:"2", name:"Comedy"},
        rate:2.5,
    },
    {
        _id:"23563454654",
        title:"Old Genders",
        stock:"5",
        genre:{id:"2", name:"Comedy"},
        rate:2.5,
    }
];

export function getMovies(){
    return movies;
}

export function getbyIdMovies(id){
    return movies.find(m=>m._id===id);
}
