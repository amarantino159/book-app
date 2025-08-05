import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import App from './App.jsx'
import Card from './Card.jsx'
import styled from 'styled-components'


const mock_data ={
    'OL17834026W':{
      "description": "**The eagerly awaited sequel to the #1 *New York Times* bestselling *Words of Radiance*, from epic fantasy author Brandon Sanderson, at the top of his game**\r\n\r\nIn *Oathbringer*, the third volume of the *New York Times* bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe whose numbers are as great as their thirst for vengeance.\r\n\r\nDalinar Kholin's Alethi armies won a fleeting victory at a terrible cost: the enemy Parshendi summoned the violent Everstorm, which now sweeps the world with destruction, an din its passing awakens the once peaceful and subservient parshmen to the horror of their millennia-long enslavement by humans. While on a desperate flight to warn his family of the threat, Kaladin Stormblessed must come to grips with the fact that the newly kindled anger of the parshmen may be wholly justified.\r\n\r\nNestled in the mountains high above the storms, in the tower city of Urithiru, Shallan Davar investigates the wonders of the ancient stronghold of the Knights Radiant and unearths dark secrets lurking in its depths. And Dalinar realizes that his holy mission to unite his homeland of Alethkar is too narrow in scope. Unless all the nations of Roshar can put aside Dalinar's blood-soaked past and stand together--and unless Dalinar himself can confront that past--even the restoration of the Knights Radiant will not prevent the end of civilization.\r\n\r\nThis description comes from the publisher. *Oathbringer* is the third book of the Stormlight Archive, the first of which is *The Way of Kings*.",
      "covers": [
          14658111
      ],
      "key": "/works/OL17834026W",
      "authors": [
          {
              "author": {
                  "key": "/authors/OL1394865A"
              },
              "type": {
                  "key": "/type/author_role"
              }
          }
      ],
      "title": "Oathbringer",
      "subjects": [
          "Imaginary places",
          "Kings and rulers",
          "Fiction",
          "Magic",
          "Imaginary wars and battles",
          "Action & Adventure",
          "Slavery",
          "Fantasy",
          "Military",
          "Epic",
          "nyt:combined-print-and-e-book-fiction=2017-12-03",
          "New York Times bestseller",
          "Fiction, fantasy, epic",
          "nyt:hardcover-fiction=2017-12-03",
          "FICTION / Fantasy / Epic",
          "FICTION / Fantasy / Military",
          "FICTION / Fantasy / Action & Adventure"
      ],
      "type": {
          "key": "/type/work"
      },
      "location": "/works/OL17834026W",
      "identifiers": {
          "bookbrainz": [
              "9f5e8871-1f3e-49c3-8880-b4627281cafa"
          ],
          "musicbrainz": [
              "27e5ad61-222c-41c4-8d71-1dfdc0f0c7ef"
          ],
          "wikidata": [
              "Q28312017"
          ]
      },
      "latest_revision": 16,
      "revision": 16,
      "created": {
          "type": "/type/datetime",
          "value": "2018-01-29T03:22:31.997815"
      },
      "last_modified": {
          "type": "/type/datetime",
          "value": "2025-05-20T19:41:48.989907"
      }
  },
    'OL15358691W':{
      "description": "Widely acclaimed for his work completing Robert Jordan’s Wheel of Time saga, Brandon Sanderson now begins a grand cycle of his own, one every bit as ambitious and immersive.\r\n\r\nRoshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.\r\n\r\nIt has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars are fought for them, and won by them.\r\n\r\nOne such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.\r\n\r\nBrightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by overpowering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity.\r\n\r\nAcross the ocean, an untried young woman named Shallan seeks to train under the eminent scholar and notorious heretic Jasnah Kholin, Dalinar’s niece. Though she genuinely loves learning, Shallan’s motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.\r\n\r\nThe result of more than ten years of planning, writing, and worldbuilding, The Way of Kings is but the opening movement of the Stormlight Archive, a bold masterpiece in the making.\r\n\r\nSpeak again the ancient oaths,\r\n\r\nLife before death.\r\nStrength before weakness.\r\nJourney before destination.\r\n\r\nand return to men the Shards they once bore.\r\n\r\nThe Knights Radiant must stand again.\r\n\r\n-From Cover Flap",
      "links": [
          {
              "title": "Book Webpage",
              "url": "http://brandonsanderson.com/books/the-stormlight-archive/the-way-of-kings/",
              "type": {
                  "key": "/type/link"
              }
          },
          {
              "title": "Author Introduction",
              "url": "http://www.tor.com/blogs/2010/06/lemgthe-way-of-kingslemg-an-introduction",
              "type": {
                  "key": "/type/link"
              }
          }
      ],
      "title": "The Way of Kings",
      "covers": [
          14658316
      ],
      "subjects": [
          "New York Times Bestseller",
          "Fantasy",
          "Epic Fantasy",
          "Imaginary places",
          "Kings and rulers",
          "Magic",
          "Imaginary wars and battles",
          "Manuscripts",
          "Slavery",
          "Fiction",
          "Fiction, fantasy, epic",
          "high fantasy",
          "nyt:hardcover-fiction=2010-09-19",
          "Fiction, fantasy, general",
          "American literature",
          "series:Stormlight Archive"
      ],
      "key": "/works/OL15358691W",
      "authors": [
          {
              "author": {
                  "key": "/authors/OL1394865A"
              },
              "type": {
                  "key": "/type/author_role"
              }
          }
      ],
      "type": {
          "key": "/type/work"
      },
      "location": "/works/OL15358691W",
      "identifiers": {
          "bookbrainz": [
              "f4fc0f56-54b3-45ed-b4a6-a204760ff524"
          ],
          "musicbrainz": [
              "2901e889-871b-4369-be86-2efbf0abe90e"
          ],
          "wikidata": [
              "Q2136877"
          ]
      },
      "latest_revision": 31,
      "revision": 31,
      "created": {
          "type": "/type/datetime",
          "value": "2010-08-30T19:32:12.557395"
      },
      "last_modified": {
          "type": "/type/datetime",
          "value": "2025-01-24T20:50:56.499340"
      }
  },
  'OL16813053W':{
    "description": "The eagerly awaited sequel to the New York Times bestselling The Way of Kings.\r\n\r\nSix years ago, the Assassin in White, a hireling of the inscrutable Parshendi, assassinated the Alethi king on the very night a treaty between men and Parshendi was being celebrated. So began the Vengeance Pact among the highprinces of Alethkar and the War of Reckoning against the Parshendi.\r\n\r\nNow the Assassin is active again, murdering rulers all over the world, using his baffling powers to thwart every bodyguard and elude all pursuers. Among his prime targets is Highprince Dalinar, widely considered the power behind the Alethi throne. His leading role in the war would seem reason enough, but the Assassin’s master has much deeper motives.\r\n\r\nExpected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status darkeyes.  Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.\r\n\r\nBrilliant but troubled Shallan strives along a parallel path. Despite being broken in ways she refuses to acknowledge, she bears a terrible burden: to somehow prevent the return of the legendary Voidbringers and their civilization-ending Desolation. The secrets she needs can be found at the Shattered Plains, but even arriving there proves more difficult than she imagined.\r\n\r\nMeanwhile, at the heart of the Shattered Plains, the Parshendi are making an epochal decision. Hard pressed by years of Alethi attacks, their numbers ever shrinking, they are convinced by their war leader, Eshonai, to risk everything on a desperate gamble with the very supernatural forces they once fled. The consequences for Parshendi and humans alike—indeed, for Roshar itself—are as dangerous as they are incalculable.",
    "links": [
        {
            "title": "Book Webpage",
            "url": "http://brandonsanderson.com/books/the-stormlight-archive/words-of-radiance/",
            "type": {
                "key": "/type/link"
            }
        },
        {
            "title": "Sample Chapters: Prologue, CH 1, and CH 2",
            "url": "http://www.tor.com/stories/2014/01/excerpt-brandon-sanderson-words-of-radiance-prologue-chapter-one-and-two",
            "type": {
                "key": "/type/link"
            }
        },
        {
            "title": "Sample Chapters: CH 3, CH 4, and CH 5",
            "url": "http://www.tor.com/stories/2014/01/excerpt-brandon-sanderson-words-of-radiance-prologue-chapter-three-four-and-five",
            "type": {
                "key": "/type/link"
            }
        },
        {
            "title": "Sample Chapters: CH 6, CH 8, and CH 9",
            "url": "http://www.tor.com/stories/2014/01/excerpt-brandon-sanderson-words-of-radiance-chapter-six-eight-and-nine",
            "type": {
                "key": "/type/link"
            }
        },
        {
            "title": "Sample Chapters: CH 10, CH 12, CH 14, and Interlude 1",
            "url": "http://www.tor.com/stories/2014/01/excerpt-brandon-sanderson-words-of-radiance-chapter-ten-twelve-fourteen-and-interlude-1",
            "type": {
                "key": "/type/link"
            }
        }
    ],
    "title": "Words of Radiance",
    "covers": [
        14658334
    ],
    "subjects": [
        "Imaginary wars and battles",
        "Fiction",
        "Fiction, fantasy, epic",
        "high fantasy",
        "epic fantasy",
        "nyt:combined-print-and-e-book-fiction=2014-03-23",
        "New York Times bestseller",
        "Magic",
        "Life on other planets",
        "Fantasy fiction",
        "Great powers",
        "Guerres et batailles imaginaires",
        "Romans, nouvelles",
        "Grandes puissances",
        "Imaginary wars and battles -- Fiction"
    ],
    "key": "/works/OL16813053W",
    "authors": [
        {
            "author": {
                "key": "/authors/OL1394865A"
            },
            "type": {
                "key": "/type/author_role"
            }
        }
    ],
    "type": {
        "key": "/type/work"
    },
    "location": "/works/OL16813053W",
    "identifiers": {
        "bookbrainz": [
            "d7f34f22-edb2-4a85-80fb-574d74270d90"
        ],
        "musicbrainz": [
            "e3ef764a-5cd4-444b-a10a-c11e80a72499"
        ],
        "wikidata": [
            "Q8034469"
        ]
    },
    "latest_revision": 28,
    "revision": 28,
    "created": {
        "type": "/type/datetime",
        "value": "2014-03-04T04:03:46.188404"
    },
    "last_modified": {
        "type": "/type/datetime",
        "value": "2025-01-16T22:28:56.654024"
    }
},
  'OL20842226W':{
    "title": "Rhythm of War",
    "covers": [
        14658361
    ],
    "key": "/works/OL20842226W",
    "authors": [
        {
            "author": {
                "key": "/authors/OL1394865A"
            },
            "type": {
                "key": "/type/author_role"
            }
        }
    ],
    "type": {
        "key": "/type/work"
    },
    "subjects": [
        "nyt:combined-print-and-e-book-fiction=2020-12-06",
        "New York Times bestseller",
        "Fiction, fantasy, epic",
        "Fiction, fantasy, action and adventure",
        "American literature",
        "Fiction, fantasy, action & adventure"
    ],
    "location": "/works/OL20842226W",
    "description": {
        "type": "/type/text",
        "value": "The eagerly awaited sequel to the #1 New York Times bestselling Oathbringer, from epic fantasy author Brandon Sanderson\r\n\r\nAfter forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.\r\n\r\nNow, as new technological discoveries by Navani Kholin's scholars begin to change the face of the war, the enemy prepares a bold and dangerous operation. The arms race that follows will challenge the very core of the Radiant ideals, and potentially reveal the secrets of the ancient tower that was once the heart of their strength.\r\n\r\nAt the same time that Kaladin Stormblessed must come to grips with his changing role within the Knights Radiant, his Windrunners face their own problem: As more and more deadly enemy Fused awaken to wage war, no more honorspren are willing to bond with humans to increase the number of Radiants. Adolin and Shallan must lead the coalition’s envoy to the honorspren stronghold of Lasting Integrity and either convince the spren to join the cause against the evil god Odium, or personally face the storm of failure."
    },
    "latest_revision": 14,
    "revision": 14,
    "created": {
        "type": "/type/datetime",
        "value": "2020-06-08T10:48:21.583432"
    },
    "last_modified": {
        "type": "/type/datetime",
        "value": "2024-08-22T07:24:04.384950"
    }
},
}
function List({list}){
  const [data, setData] = useState([]);
  // const headers = new Headers({
  //   "User-Agent": "toy app for JS/React Class (amarantino159@gmail.com)"
  // });
  // const options = {
  //   //method: 'GET',
  //   headers: headers
  // };

  // list.forEach((book)=>{
  //   useEffect(() => {
  //   fetch(`https://openlibrary.org/works/${book}.json`)
  //   // fetch(`https://openlibrary.org/works/OL17834026W.json`)
  //   .then(res => res.json())
  //   .then(jsond => setData((prev)=>[...prev,jsond]))
  //   .then(()=>setData(data.sort((a,b)=>{
  //     if(a.created.value.slice(0,4)>b.created.value.slice(0,4)){
  //       return 1
  //     }
  //     else{
  //       return -1
  //     }
  //   })))// custom sort to not have to worry about the async of fetches out of order
  //   // .then(() => console.log(list)); // ask later why this does not console out the new populated list
  //   }, [])
  // });

  // console.log(list)

  useEffect(() => {
    list.forEach((book)=>{
    setData((prev)=>[...prev,mock_data[book]])
    // setData(data.sort((a,b)=>{
    //   if(a.created.value.slice(0,4)>b.created.value.slice(0,4)){
    //     return 1
    //   }
    //   else{
    //     return -1
    //   }
    // }))// custom sort to not have to worry about the async of fetches out of order

    })
  },[]);

  // console.log(data)
  return(<>
    {/* <h2>LIST</h2> */}
    {data.map((book)=><Card book={book}/>)}
  </>)
}

export default List