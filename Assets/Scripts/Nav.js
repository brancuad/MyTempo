﻿#pragma strict
import UnityEngine.SceneManagement;
import UnityEngine.EventSystems;
import UnityEditor;

var level = 0;
var song = 0;

var instruction = [
	5, 5, 5, 6, 6, 6, 7, 8
];

function NextPage() {
	Debug.Log("clicked");
	SceneManager.LoadScene(++level);
}

function PreviousPage() {
	SceneManager.LoadScene(--level);
}

function Exit() {
	Debug.Log("quit");
	if(EditorApplication.isPlaying) {
		EditorApplication.isPlaying = false;
	}
	else {
		Application.Quit();
	}
}

function Start() {
	Debug.Log("started");
}

function Update() {

}

function InstructionScreen() {
	Debug.Log("InstructionScreen");
	var songObject = EventSystem.current.currentSelectedGameObject;
	var songChoice = GameObject.Find("SongChoice");
	var songChoiceScript = songChoice.GetComponent(SongChoice);
	songChoiceScript.songChoice = song;
	Debug.Log(songChoiceScript.songChoice);
	songChoice.DontDestroyOnLoad(songChoice);
	SceneManager.LoadScene(instruction[song]);
}