import { v4 } from 'uuid'

class AddPostModel {
    state = {
        id: v4(),
        date: new Date(),
        title: '',
        text: '',
        user: ''
    }

}

export default AddPostModel