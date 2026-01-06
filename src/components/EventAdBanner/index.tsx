import { Box, Image } from "@chakra-ui/react"


const list = [
  {
    name: '2027 대성마이맥 대성패스',
    image: '/images/ad/ad1.png',
    url: 'https://bitl.kr/fIYC5P',
  },
  {
    name: '[마이맥X잔망루피] 플래너 광클릭 EVENT',
    image: '/images/ad/ad2.png',
    url: 'https://bitl.kr/eiTmMe',
  },
  {
    name: '김승리 ALL OF KICE',
    image: '/images/ad/ad3.jpg',
    url: 'https://bitl.kr/6isIZO',
  }
]

const premiumAdList = [
  {
    name: '화물차리스 전문 화물박사 - 1톤트럭, 특장차 즉시출고',
    image: '/images/ad/premiumAd1.jpg',
    url: 'https://bitl.kr/ri3oZA',
  },
  {
    name: 'Ahing - 베트남 친구와의 만남',
    image: '/images/ad/premiumAd2.png',
    url: 'https://bitl.kr/a9Plro',
  },
  {
    name: '아마시아 - 나와 가까운 인연부터 외국인까지',
    image: '/images/ad/premiumAd3.png',
    url: 'https://bitl.kr/WBqGWu',
  },
]
const EventAdBanner = ({ type = 'event' }: { type?: 'event' | 'premium' }) => {
  const item = type === 'event' ? list[Math.floor(Math.random() * list.length)] : premiumAdList[Math.floor(Math.random() * premiumAdList.length)];
  return (
    <Box>
      <Image src={item?.image} alt="광고" cursor={'pointer'} onClick={() => {window.open(item?.url, '_blank', 'noopener,noreferrer')}} />
    </Box>
  )
}

export default EventAdBanner