const { Get, Post } = require('./FakeRequest')

const newPost = new Post()

console.log(Get.type)
console.log(Post.type)

console.log(newPost.body)
console.log(Reflect.getPrototypeOf(Post))
