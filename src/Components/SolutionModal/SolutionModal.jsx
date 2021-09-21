import React from 'react'

const SolutionModal = ({ player, setPlayer, url }) => {
    return (
        <div
        className="z-50 fixed flex justify-center items-center w-full h-full inset-0 m-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true">
        <div className="w-full md:w-1/2 lg:w-1/3 max-w-500 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0">
          <div
            onClick={() => setPlayer(false)}
            className="fixed inset-0 bg-black opacity-60 bg-opacity-90 transition-opacity"
            aria-hidden="true"></div>
          <div className="w-full align-bottom rounded-lg shadow-xl transform transition-all">
          <div className="flex items-center text-center justify-center">
          <iframe className="block" title="question" id="ytplayer" type="text/html" width="640" height="480" src={url} frameborder="0"></iframe> 
          </div>
          </div>
        </div>
      </div>
    )
}

export default SolutionModal
