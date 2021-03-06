import * as React from "react";
const Contact = () => {
    return (
        <section class="text-gray-600 dark:text-gray-200 body-font relative h-full">
            <div class="container px-5 py-24 mx-auto h-full">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1
                        class="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-gray-200 text-gray-900">Contact Me</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If you have any questions or enquries feel free to contact me</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600 dark:text-gray-200 ">Name
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="w-full rounded border border-gray-500 focus:border-gray-500 dark:text-gray-100 py-1 dark:bg-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </label>
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-200">Email
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="w-full rounded border border-gray-500 focus:border-gray-500 dark:text-gray-100 py-1 dark:bg-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </label>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-200">Message
                                    <textarea
                                        id="message"
                                        name="message"
                                        class="w-full rounded border border-gray-500 focus:border-gray-500 outline-none dark:text-gray-100 py-1 dark:bg-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </label>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button
                                class="flex mx-auto text-white  bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-grey-600 rounded text-lg">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-20">
            </div>
        </section>

    )
}
export default Contact