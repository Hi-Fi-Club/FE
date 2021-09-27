import API from 'util/dataFetching/API'


export const getUsesrInfo = async()=>{
//jwt토큰으로 회원정보만 받을 수 있는 api ?
}

export const getMainInterests = async() =>{
	
const token = localStorage.getItem('jwt')
console.log(token)
// console.log("이거", JSON.stringify(token).replace(/\"/g,""))


	const header = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await fetch(API.USERINFO.MAIN_INTERESTS(), header)

	console.log(response) //응답이 잘못된것 같음
	return response
}