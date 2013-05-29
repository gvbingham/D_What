#!/usr/bin/perl
use strict;
use warnings;


my $cgihttp = <>;
my $jsonfile = '';
my $id = pop_id();

sub pop_id {
        $cgihttp =~ /"id":"(.*?)",/m;
        return $1;
}

sub writer {
	open WFILE, ">/var/www/dice/log/$id.json" or die $!; 
	print WFILE $cgihttp;
	close WFILE;
}

sub reader {
	open RFILE, "</var/www/dice/log/$id.json" or die $!;
	$jsonfile = <RFILE>;
	close RFILE;
}

sub httpheader {
	if ($cgihttp eq $jsonfile) {
		print "Content-type: text/plain\n";
		print "Status: 204 No Response\n\n";
	}
	else {
                print "Content-type: text/plain\n";
                print "Status: 204 No Response\n\n";
	}
}

until ($cgihttp eq $jsonfile) {
writer();
reader();
}

httpheader();
