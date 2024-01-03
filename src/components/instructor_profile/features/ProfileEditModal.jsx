import React from "react";

const ProfileEditModal = ({ userProfile }) => {
  return (
    <>
      <button
        onClick={() =>
          document
            .getElementById(`profile_edit_modal_${userProfile?.id}`)
            .showModal()
        }
        className="btn btn-sm btn-outline"
      >
        edit profile
      </button>

      <dialog id={`profile_edit_modal_${userProfile?.id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          {userProfile?.first_name}
        </div>
      </dialog>
    </>
  );
};

export default ProfileEditModal;
