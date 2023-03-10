import styled from 'styled-components';
// import { urlFor, client } from "../../client";
import { useState, useEffect } from "react"
import { awards } from '../data/projects';
import SkewWraper from './SkewWraper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import awardPic from '../assets/images/awardPic.jpg'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import achievement from '../assets/images/achievement.jpg'
import { Link } from 'react-router-dom';

const AwardWrap = styled.section`
	height: 80vh;

	h2 {
		box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.2);
		background-color: rgba(255, 255, 255, 0.8);
		padding: 8px 20px;
		top: -1.5rem;
		left: -1rem;
	}

	/* .award-wrap {
		animation: floatText 15s infinite linear;
	}

	.award-wrap:hover {
		animation-play-state: paused;
	}
	@keyframes floatText {
		to {
			transform: translateX(-50vw);
		}
	} */
`;

const Awards = (props) => {

	// const [awards, setAwards] = useState([]);

  //   useEffect(() => {
	// 	client
	// 	  .fetch(
	// 		`*[_type == "awards"]{
	// 			_id,
	// 			type,
	// 			desc
	// 		  }`
	// 	  )
	// 	  .then((data) => setAwards(data))
	// 	  .catch(console.error);
	// }, []);

	// console.log(awards)


   
	return (
		<SkewWraper data_attr='flip-right'>
			<AwardWrap
				className=' mt-16 mb-16 relative flex justify-center'
				{...props}
			>
				<div className='flex justify-center bg-gray-100 w-full 2xl:w-8/12 h-full px-4 py-2 lg:px-8'>
					<div className='bg-white w-full h-full flex justify-center items-center relative'>
						<div className='bg-white w-11/12 h-5/6 px-4 mx-4 py-2 overflow-x-auto scrollbar-hidden rounded-lg'>
							<ul className='flex h-full items-center space-x-8 justify-between award-wrap'>
								{awards.map((award) =>
									(
										<li
											key={award.id}
											className='items-center cursor-pointer'
										>
											<section className=' relative w-72 shadow-lg rounded-b-2xl'>
												<div className='waves-bg h-44 rounded-t-2xl flex relative  '>
													<img
														src={awardPic}
														alt='award'
														className='bg-placement w-full h-full rounded-t-2xl'
													/>
													<div className='flex items-center justify-center absolute h-full w-full bg-black rounded-t-2xl bg-opacity-30'>
														<h4 className='text-white font-semibold text-3xl capitalize'>
															{award.type}
														</h4>
													</div>
													<div className='flex items-center space-x-6 rounded-t-2xl  bg-black/10 justify-center opacity-0 hover:opacity-90 hover:bg-gray-300 transition-all duration-400 hover:shadow-sm absolute flex-row h-full w-full'>
													   <a className='rounded-full p-3  bg-slate-500' href={award.toGitHub}>
													     <GitHubIcon  className="hover:transition-all-0.3s-ease"/>
													   </a>
													   <a  className='rounded-full p-3 bg-slate-500' href={award.toWeb}>
													     <LanguageIcon />
													   </a>	
												    </div>
												</div>
												<div className='h-48 bg-white p-5 rounded-b-2xl w-full flex justify-center items-center awardlightbg'>
													<p className='font-normal text-sm text-center'>
														{award.desc}
													</p>
													
												</div>
												
											</section>
										</li>
									 ) 
									// 	<li
									// 		key={award.id}
									// 		className='items-center cursor-pointer'
									// 	>
									// 		<section className='w-72 shadow-lg rounded-b-2xl'>
									// 			<div className='waves-bg h-44 rounded-t-2xl flex relative'>
									// 				<img
									// 					src={achievement}
									// 					alt='achievement'
									// 					className='bg-placement w-full h-full rounded-t-2xl'
									// 				/>
									// 				<div className='flex items-center justify-center absolute h-full w-full bg-black rounded-t-2xl bg-opacity-30'>
									// 					<h4 className='text-white font-semibold text-3xl capitalize'>
									// 				 	MERN Application
									// 					</h4>
									// 				</div>
									// 			</div>
									// 			<div className='h-48 bg-white p-5 rounded-b-2xl w-full flex justify-center items-center awardlightbg'>
									// 				<p className='font-normal text-sm text-center'>
									// 					{award.desc}
									// 				</p>
									// 			</div>
									// 		</section>
									// 	</li>
									// )
								)}
							</ul>
						</div>
						<h2 className='font-bold capitalize text-3xl inline-block  text-gray-600 absolute z-10'>
							 Projects
						</h2>
					</div>
				</div>
			</AwardWrap>
		</SkewWraper>
	);
};

export default Awards;