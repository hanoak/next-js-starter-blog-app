import { blogs } from '../../../blogsDb';

export default function handler(req, res) {
    const id = req.query.id;
    const blog = blogs.filter( blog => blog.id == id );
    
    if(blog.length) {
        res.status(200).json(blog[0]);
    } else {
        res.status(404).json({error: "Blog not found!"})
    }

}