import parse from 'html-react-parser';

const Score = ({score}) =>{

    const scoreRound = Math.round(score)
    let text = ""
    for (let i = 1; i <= 5; i++) {
        console.log(scoreRound);
        if(i <= scoreRound ){
            text += '<i className="icn-star primary"></i>';
        }else{
            text += '<i className="icn-star"></i>';
        }
      }

    return(
        <>
       {parse(text)}
        <span>4.2 of 5</span>
        </>
    )
}
export default Score
