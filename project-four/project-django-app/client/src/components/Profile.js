import React, { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { userIsOwner } from '../components/extras/authHelp'

const Profile = () => {

  const Profile = () => {   //{ username } 
    const [user, setUser] = useState(null)
    const [allSkills, setAllSkills] = useState(null)
    const [userArtwork, setUserArtwork] = useState(null)
    const id = { userArtwork }
    console.log('🐝 ~ file: Profile.js ~ line 17 ~ id', id)
    // const [formData, setFormData] = useState({
    //   bio: ''
    // })

    const params = useParams()
    // const history = useHistory()
    const location = useLocation()

    console.log('🐝 ~ file: Profile.js ~ line 23 ~ userArtwork', userArtwork)


    useEffect(() => {
      getSingleUser()
      console.log('user ->', user)
      getAllArtwork()
    }, [location.pathname])

    const getSingleUser = async () => {
      const response = await axios.get(`/api/users/${params.id}`)
      setUser(response.data)
    }

    const getAllArtwork = async () => {
      const response = await axios.get('/api/artwork')
      setAllArtwork(response.data)
    }

    useEffect(() => {
      if (!allArtwork) return null
      const userArtworkArray = allArtwork.filter(doodle => {
        return doodle.owner._id === params.id
      })
      setUserArtwork(userArtworkArray)
      console.log('🐝 ~ file: Profile.js ~ line 53 ~ userArtwork', userArtwork)

    }, [allArtwork])

    if (!user) return null
    if (!userArtwork) return null
    return (
      <>
        <div className="main profile-main">
          <div className="section-header section-header-profile">
            <img src={profile} alt="Profile" className="title-img"></img>
          </div>
          <div className="content-section">
            <div className="box profile-details-wrapper">
              <div className="tile is-vertical">
                <div>
                </div>
                <div>
                  <p className="profile-name-text">{user.username}</p>
                  <img className="profile-pic-img" src={user.profilePicture}></img>
                  {user.bio &&
                    <>
                      <p className="profile-title-text">Bio:</p>
                      <p className="profile-sub-text">{user.bio}</p>
                    </>
                  }
                  {user.location &&
                    <>
                      <p className="profile-title-text">Location:</p>
                      <p className="profile-sub-text">{user.location}</p>
                    </>
                  }
                </div>
                {userIsOwner(user._id) &&
                  <Link to={`/profile/${user._id}/profile-form`}>
                    <button className="edit-button">
                      <svg className="edit-icon edit-button-fill" viewBox="0 0 401 400" version="1.1">
                        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                          <g id="Artboard" transform="translate(-1182.000000, -1153.000000)" fillRule="nonzero">
                            <g id="editicon" transform="translate(1182.000000, 1153.000000)">

                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </Link>
                }
              </div>
            </div>
            <div className="arrow-down-wrapper">
              <svg className="arrow-down-icon" viewBox="0 0 440 259">
                <defs>
                  <polygon id="path-1" points="980 1679 1196 1930 764 1930"></polygon>
                  <filter x="-1.6%" y="-2.0%" width="103.2%" height="105.6%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                  </filter>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Artboard" transform="translate(-760.000000, -1673.000000)">
                    <g id="Triangle" transform="translate(980.000000, 1804.500000) scale(1, -1) translate(-980.000000, -1804.500000) ">
                      <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                      <use fill="#000000" fillRule="evenodd" xlinkHref="#path-1"></use>
                    </g>
                  </g>
                </g>
              </svg>
            </div>


            <div className="box profile-doodle-wrapper columns is-multiline">

              {userArtwork.length > 0 ?
                <>
                  {/* {userArtwork.map(art => (
                        <ArtCard key={art._id} id={id} {...art} cardFlip={false}/>
                      ))} */}
                  {userArtwork.map((artwork) => {
                    const decompressedDoodleData = LZString.decompressFromEncodedURIComponent(artwork.doodleData)
                    return (
                      <Link key={artwork.id} to={`/gallery/${artwork.id}`}>
                        <div className='my-box box hover-box'>
                          <p style={{ fontSize: 30 }}>{artwork.title}</p>
                          <CanvasDraw
                            className="canvas  column"
                            disabled
                            hideGrid
                            immediateLoading={true}
                            //saveData={doodleData}
                            saveData={decompressedDoodleData}
                            backgroundColor={JSON.parse(decompressedDoodleData).backgroundColor}
                          />
                        </div>
                      </Link>
                    )
                  })}

                </>
                :
                <p>No doodles yet... <Link to="/doodle-new" className="no-doodles-text">create new</Link></p>
              }
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Profile