package com.kotlin.mp.capacitor

import com.getcapacitor.*

@NativePlugin
class KotlinMultiPlatformCapacitor : Plugin() {
    @PluginMethod
    fun echo(call: PluginCall) {
        val value = call.getString("value")
        val ret = JSObject()
        ret.put("value", value)
        call.success(ret)
    }

    @PluginMethod
    fun fillListOfPeople(call: PluginCall) {
        val listOfPeople = call.getArray("people").toList<Person>().reversed()
        val friends = listOfPeople.mapIndexedNotNull { i, p ->
            val friend = listOfPeople.getOrNull(i - 1) ?: return@mapIndexedNotNull null
            PersonWithFriend(p, friend)
        }
        if (listOfPeople.isNotEmpty()) {
            val result = JSObject()
            result.put("friends", friends.toTypedArray())
            call.success(result)
        } else
            call.error("There are no friends")
    }
}

data class Person(val name: String, val lastName: String)

data class PersonWithFriend(val person: Person, val friend: Person)