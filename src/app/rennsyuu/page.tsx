import React from "react";

const page = () => {
  return (
    <div>
      <input type="checkbox" className="accent-green-800" />
      <label>同意します</label>

      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input type="radio" name="color" className="accent-red-500" />
          <span>赤</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="color" className="accent-blue-500" />
          <span>青</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="color" className="accent-green-800" />
          <span>緑</span>
        </label>
      </div>
    </div>
  );
};

export default page;
