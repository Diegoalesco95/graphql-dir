'use strict'

const courses = [
  {
    _id: '57475836-9a82-48aa-9580-4659e475a8d1',
    title: 'Future Branding Facilitator',
    teacher: 'Kevin Bechtelar',
    description: 'Quas sint molestias. Vel impedit odit molestiae. Quia accusantium quia exercitationem dolorem placeat sint.',
    topic: 'Integration'
  },
  {
    _id: 'b2dadb09-a6ec-41e1-983c-fe831eed26a9',
    title: 'Regional Data Analyst',
    teacher: 'Henry Gerlach',
    description:
      'Odio harum velit tenetur debitis quisquam voluptatem qui ad. Aut consequatur quia saepe in maiores iusto nam vel. Dolor consequatur odio cupiditate animi occaecati. Porro officia delectus autem dignissimos. Eum magnam in inventore. Pariatur aliquid accusantium facere.',
    topic: 'Mobility'
  },
  {
    _id: 'b0a23f09-a04e-4cf8-8bd8-7c0e91732b36',
    title: 'Dynamic Data Strategist',
    teacher: 'Kenna Price',
    description:
      'Ut eum sint aut dicta. Eaque quod qui veniam dolores ex est totam. Rem labore ut modi. Debitis dolor mollitia enim eligendi neque aut illum autem odio. Quam rem tempore atque atque nobis nemo saepe qui dolore.',
    topic: 'Factors'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id)
      return course.pop()
    }
  }
}
