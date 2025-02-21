/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import avatar from "../../../../src/assets/Dashboard/user.png";
import { MdOutlineEdit } from "react-icons/md";
import { useChangePasswordMutation, useGetsigleuserQuery, useUpateUserMutation } from "../../../redux/features/auth/authApi";
import img8 from "../../../../src/assets/Dashboard/check-out.png";
import img5 from "../../../../src/assets/Dashboard/reward.png";
import img6 from "../../../../src/assets/Dashboard/gross (1).png";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { useGetSingleOrderQuery } from "../../../redux/features/Order/OrderApi";
import { Skeleton } from "../../../components/ui/skeleton";

const Profile = () => {
  const { data: user, isLoading } = useGetsigleuserQuery(undefined);
  const {data}= useGetSingleOrderQuery(undefined)
  const [ChangePassword] = useChangePasswordMutation();
  const [updateProfile] = useUpateUserMutation();
  const [editMode, setEditMode] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  
  // Password Change State
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleCancel = () => {
    setNewPhoto(null);
    setEditMode(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setNewPhoto(file);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadImage = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Clooud_Gen");

    try {
      setUploading(true);
      const res = await fetch("https://api.cloudinary.com/v1_1/dztxlecbe/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setUploading(false);
      return data.secure_url;
    } catch (error) {
      console.error("Image upload failed", error);
      setUploading(false);
      return null;
    }
  };

  const handleSave = async () => {
    if (newPhoto) {
      const imageUrl = await uploadImage(newPhoto);
      if (imageUrl) {
        await updateProfile({ photo: imageUrl });
      }
    }
    setEditMode(false);
  };

  // Password Change Handler
  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    setPasswordError(""); // Clear error

    try {
      const data ={
        oldPassword,
        newPassword
      }
      console.log(data);
      await ChangePassword(data).unwrap();
      toast.success("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error("Failed to change password. Please try again.");
    }
  }

  return (
    <div className="m-6 space-y-4">
     {
      isLoading?<Skeleton className="h-40 w-full"/>: <div className="flex flex-col shadow-md  md:flex-row justify-between items-center border border-slate-200 p-5  rounded-2xl relative">
      <div className="flex flex-col md:flex-row gap-5 items-center relative">
        <div className="h-28 w-28 relative">
          <img
            alt="profile image"
            src={user?.data?.photo || avatar}
            className="rounded-full h-full w-full object-cover object-center"
          />
          <button
            onClick={() => setEditMode(true)}
            className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full shadow-md"
          >
            <MdOutlineEdit className="text-lg text-slate-600" />
          </button>
        </div>
        <div className="text-center md:text-start  ">
          <p className=" uppercase font-semibold">{user?.data?.role}</p>
          <p className=" uppercase">{user?.data?.name}</p>
          <p>{user?.data?.email}</p>
        </div>
      </div>

      {editMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Change Profile Picture
            </h2>
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              className="border-2 p-2 rounded-md w-full mb-4"
            />
            {newPhoto && (
              <div className="mb-4 flex justify-center">
                <img
                  src={URL.createObjectURL(newPhoto)}
                  alt="Preview"
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
            )}
            <div className="flex justify-end gap-2">
              <button
                onClick={handleSave}
                className="rounded-full h-8 w-20 text-slate-600 border border-slate-200 flex items-center justify-center"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Save"}
              </button>
              <button
                onClick={handleCancel}
                className="rounded-full h-8 w-20 text-slate-600 border border-slate-200 flex items-center justify-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
     }
    <div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <img
            
            src={img6}
            alt="hello"
            className="h-16 w-16"
          ></img>
          <div>
            <h3 className="text-2xl text-blue-600 font-bold  dark:text-white">
              45000৳
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {" "}
              Total Amount
            </p>
          </div>
        </li>
        <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <img
            
            src={img5}
            alt="hello"
            className="h-16 w-16"
          ></img>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              20
            </h3>
            <p className="text-gray-600 dark:text-gray-400"> Total Point</p>
          </div>
        </li>
        <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <img
            
            src={img8}
            alt="hello"
            className="h-16 w-16"
          ></img>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {data?.data?.length}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {" "}
              Total Order
            </p>
          </div>
        </li>
      </div>
    </div>
     <div className="border p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <div className="space-y-4">
          <Input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          <Button onClick={handleChangePassword} className="w-full">
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
