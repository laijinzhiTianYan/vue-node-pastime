import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import VideoList from '@/views/VideoList'
import VideoPlayer from '@/views/VideoPlayer'
import VideoPost from '@/views/VideoPost'
import PostSuccess from '@/views/PostSuccess'
import PersonalPage from '@/views/PersonalPage'
import ImageList from '@/views/ImageList'
import ImageBanner from '@/views/ImageBanner'
import Chat from '@/views/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/videolist',
      name: 'videolist',
      component: VideoList
    },
    {
      path: '/video/:id',
      name: 'videoPlayer',
      component: VideoPlayer
    },
    {
      path: '/post/video',
      name: 'videopost',
      component: VideoPost,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/post/success',
      name: 'success',
      component: PostSuccess,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/page',
      name: 'page',
      component: PersonalPage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/images',
      name: 'imagelist',
      component: ImageList,
      children: [{
        path: ':id',
        component: ImageBanner
      }]
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      meta: {
        requireAuth: true
      }
    }
  ]
})
