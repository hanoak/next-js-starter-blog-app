import { blogs } from '../../../blogsDb';

export default function handler(req, res) {
    res.status(200).json(blogs);
}