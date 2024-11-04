import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import LaboView from '@/views/LaboView.vue'
import VacationForm from '@/views/VacationForm.vue'
import JoinView from '@/views/JoinView.vue'
import Mypage from '@/views/MyPage.vue'
import LectureSelect from '@/views/LectureSelect.vue'
import AttendanceCheck from '@/views/AttendanceCheck.vue'
import GuestAttendance from '@/views/GuestAttendance.vue'
import JoinTermsOfUse from '@/views/JoinTermsOfUse.vue'
import LectureApprovallist from '@/views/LectureApprovallist.vue'
import JoinComplete from '@/views/JoinComplete.vue'
import LectureInsert from '@/views/LectureInsert.vue'
import LoginView from '@/views/LoginView.vue'
import LoginHome from '@/views/LoginHome.vue'
=======
import LoginView from '../views/guest/LoginView.vue'
import LoginHome from '@/views/guest/LoginHome.vue'
import LaboView from '@/views/LaboView.vue'
import VacationForm from '@/views/student/VacationForm.vue'
import JoinView from '../views/guest/JoinView.vue'
import Mypage from '@/views/MyPage.vue'
import LectureSelect from '@/views/LectureSelect.vue'
import AttendanceCheck from '@/views/AttendanceCheck.vue'
import GuestAttendance from '@/views/guest/GuestAttendance.vue'
import StudentAttendance from '@/views/student/StudentAttendance.vue'
import TeacherToday from '@/views/teacher/TeacherToday.vue'
import TeacherCalander from '@/views/teacher/TeacherCalander.vue'
import Devmenu from '@/views/dev/Devmenu.vue'
import DeskCalander from '@/views/Desk/DeskCalander.vue'
>>>>>>> 75ed138c90830115b3902bbc544c506159be1a55

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginhome',
      component: LoginHome
    },
    {
      path: '/guestattendance',
      name: 'guestattendance',
      component: GuestAttendance
    },
    {
      path: '/stdatt',
      name: 'stdatt',
      component: StudentAttendance
    },
    {
      path: '/loginview',
      name: 'loginview',
      component: LoginView
    },
    {
<<<<<<< HEAD
      path: '/joinview',
      name: 'joinview',
      component: JoinView
=======
      path: '/join',
      name: 'join',
      component: () => import('../views/guest/JoinView.vue')
>>>>>>> 75ed138c90830115b3902bbc544c506159be1a55
    },
    {
      path: '/laboview',
      name: 'laboview',
      component: LaboView
    },
    {
      path: '/vacationform',
      name: 'vacationform',
      component: VacationForm
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage
    },
    {
      path: '/joinview',
      name: 'joinview',
      component: JoinView
    },
    {
      path: '/lectureselect',
      name: 'lectureselect',
      component: LectureSelect
    },
    {
      path: '/attendancecheck',
      name: 'attendancecheck',
      component: AttendanceCheck
    },
    {
<<<<<<< HEAD
      path: '/jointermsofuse',
      name: 'jointermsofuse',
      component: JoinTermsOfUse
    },
    {
      path: '/LectureApprovallist',
      name: 'lectureapprovallist',
      component: LectureApprovallist
    },
    {
      path: '/joincomplete',
      name: 'joincomplete',
      component: JoinComplete
    },
    {
      path: '/lectureinsert',
      name: 'lectureinsert',
      component: LectureInsert
    }
=======
      path: '/teachertoday',
      name: 'teachertoday',
      component: TeacherToday
    },
    { path: '/teachercalander',
      name: 'teachercalander',
      component: TeacherCalander
     },
    { path: '/devmenu',
      name: 'devmenu',
      component: Devmenu
     },
     {path: '/deskcalander',
      name: 'deskcalander',
      component: DeskCalander
     }
>>>>>>> 75ed138c90830115b3902bbc544c506159be1a55
  ]
})

export default router
