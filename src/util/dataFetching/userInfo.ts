import API from 'util/dataFetching/API'


export const getUsesrInfo = async()=>{
//jwt토큰으로 회원정보만 받을 수 있는 api ?
}

export const getMainInterests = async() =>{
	const response = await API.USERINFO.MAIN_INTERESTS()
	console.log(response) //응답이 잘못된것 같음
	return response
}