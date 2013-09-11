package com.anfengde.anreader;

import com.anfengde.epub.core.value.Constants;
import com.anfengde.epub.ui.BookView;
import com.anfengde.anreader.R;

import android.os.Bundle;
import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.view.Menu;

public class AnReader extends Activity {
    private boolean foreground = false;

    protected BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (foreground)
                return;
            finish();
        }
    };

    public BookView bookView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        foreground = true;
        setContentView(R.layout.activity_anreader);
        BookView bookView = (BookView) findViewById(R.id.bookView);
        bookView.setPath(Constants.CACHE_PAHT);
        bookView.initBook();
        bookView.openShelf();
        Intent intent = getIntent();
        bookView.openBookFromFileExplorer(intent);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.an_reader, menu);
        return true;
    }

    @Override
    public void onResume() {
        super.onResume();
        foreground = true;
        IntentFilter filter = new IntentFilter();
        filter.addAction("com.anfengde.ExitApp");
        this.registerReceiver(this.broadcastReceiver, filter);
        finishPreviousActivity();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        this.finish();
        this.unregisterReceiver(this.broadcastReceiver);
    }

    protected void finishPreviousActivity() {
        Intent intent = new Intent();
        intent.setAction("com.anfengde.ExitApp");
        this.sendBroadcast(intent);
    }

    @Override
    protected void onPause() {
        super.onPause();
        foreground = false;
    }

    @Override
    protected void onStop() {
        super.onStop();
        foreground = false;
    }

}
