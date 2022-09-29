import Ticker, { NewsTicker } from 'nice-react-ticker';

export const TickerElement = ()=> {
    return(
        <>
        <Ticker   isNewsTicker={true} >
        <NewsTicker id={1} title='Metabolic score' meta="11:10:20" url='' />
        <NewsTicker id={2} title='Metabolic score' meta="11:11:20" url='' />
        <NewsTicker id={3} title='Metabolic score' meta="11:12:20" url='' />
          </Ticker>
        </>
    )

}