import { fetchCommunities } from "@/lib/actions/community.actions";
import React from "react";
import RightSideCommunityCard from "../cards/RightSideCommunityCard";

import { fetchRightSiderUser } from "@/lib/actions/user.actions";
import RightSideUserCard from "../cards/RightSideUserCard";
import { currentUser } from "@clerk/nextjs";

const RightSideBar = async () => {
  const user =await currentUser()
  console.log(user)
  const commu = await fetchCommunities({
    pageNumber: 1,
    pageSize: 20,
  });

  const users = await fetchRightSiderUser({
    pageNumber: 1,
    pageSize: 25,
  });
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1 mb-3">
        Suggested Communities
        </h3>
        {commu.communities.map((community) => {
            return (
              <RightSideCommunityCard
                key={community.id}
                id={community.id}
                name={community.name}
                username={community.username}
                imgUrl={community.image}
              />
            );
          })}
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1 mb-3">Suggested Users</h3>
        {users.users.filter((u)=>u?.id!==user?.id).map((person) => (
          <RightSideUserCard
            key={person.id}
            id={person.id}
            name={person.name}
            username={person.username}
            imgUrl={person.image}
            personType="User"
          />
        ))}
      </div>
    </section>
  );
};

export default RightSideBar;
