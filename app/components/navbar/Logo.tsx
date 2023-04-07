"use client";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();

	return (
		<Image
			alt='logo'
			className='hidden md:block cursor-pointer'
			height='55'
			width='55'
			src='/images/bloom.png'
		/>
	);
};

export default Logo;
